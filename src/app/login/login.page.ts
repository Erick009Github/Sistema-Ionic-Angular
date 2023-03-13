import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ilogin } from '../models/ilogin';
import { Iresponse } from '../models/iresponse';
import { AlertController } from '@ionic/angular';
import { JwtService } from '../services/jwt.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit,OnDestroy {
  formLogin: FormGroup;
  subRef$: Subscription;
  token: any;

  constructor(
    private formBuilder:FormBuilder,
    private http: HttpClient,
    private router: Router,
    private alert: AlertController,
    private decode: JwtService
  ) { 
    this.formLogin = formBuilder.group({
      email: new FormControl('',Validators.required),
      password: new FormControl ('',Validators.required)
    });
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Error',
      message: 'Credenciales erroneas, intente nuevamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

  login(){
    const usuarioLogin: Ilogin = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    };

    this.subRef$ = this.http.post<Iresponse>('http://localhost:8070/api/Usuarios/Login',
      usuarioLogin,{observe: 'response'}).subscribe(res =>{
        this.token = res.body['token'];
        console.log(this.token)
        localStorage.setItem('ingresado',this.token);
        this.router.navigate(['/home']);
      },err =>{
        this.presentAlert();
    }); 
  }

  

  ngOnDestroy() {
    if (this.subRef$){
      this.subRef$.unsubscribe();   
    }
  }

  

}

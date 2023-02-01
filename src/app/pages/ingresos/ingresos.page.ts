import { Component, OnInit } from '@angular/core';
import { ApiSistemaService } from 'src/app/services/api/api-sistema.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {

  ingresos = [];
  busqueda:any;
  constructor(private router: Router,
    private serv: ApiSistemaService,
    private alertController: AlertController) 
    { 
      serv.listarIngresos().subscribe((data:any) => {
        //console.log('api datos',data)
        this.ingresos = data
        this.busqueda = this.ingresos;
        
      })
    }

    
    searchIngresos(event){
      const text = event.target.value;
      this.busqueda = this.ingresos;
      if(text && text.trim() != ''){
        this.busqueda = this.busqueda.filter((ingresos:any)=>{
          return(ingresos.idproveedorNavigation.nombre.toLowerCase().indexOf(text.toLowerCase())>-1);
        });
      }    
    }



  ngOnInit() {
  }

}

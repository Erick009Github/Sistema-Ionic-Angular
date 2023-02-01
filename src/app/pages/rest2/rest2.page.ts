import { Component, OnInit } from '@angular/core';
import { Ev3Service } from 'src/app/services/api/ev3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest2',
  templateUrl: './rest2.page.html',
  styleUrls: ['./rest2.page.scss'],
})
export class Rest2Page implements OnInit {

  datos = [];
  constructor(
    private router: Router,
    private serv:Ev3Service
  ) { 
    serv.ObtenerDatos().subscribe((data:any)=>{
      console.log('datos de la api',data.categories);
      this.datos = data.categories;
    })
  }
  ngOnInit() {
  }

}

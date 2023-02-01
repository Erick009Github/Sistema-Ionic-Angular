import { Component, OnInit } from '@angular/core';
import { ApiSistemaService } from 'src/app/services/api/api-sistema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {

  ventas = [];
  busqueda : any;

  constructor(private router: Router,
    private serv: ApiSistemaService)
    { 
      serv.listarVentas().subscribe((data:any)=>{
        this.ventas = data;
        this.busqueda = this.ventas;
        //console.log(data)
      });
    } 

    searchVentas(event){
    const text = event.target.value;
    this.busqueda = this.ventas;
    if(text && text.trim() != ''){
      this.busqueda = this.busqueda.filter((ventas:any)=>{
        return(ventas.idclienteNavigation.nombre.toLowerCase().indexOf(text.toLowerCase())>-1);
      });
    }    
  }

  ngOnInit() {
    
  }

}

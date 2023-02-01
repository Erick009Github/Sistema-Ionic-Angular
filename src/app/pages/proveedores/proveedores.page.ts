import { Component, OnInit } from '@angular/core';
import { ApiSistemaService } from 'src/app/services/api/api-sistema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
})
export class ProveedoresPage implements OnInit {

  proveedores = [];
  busqueda:any;
  constructor(private router: Router,private serv: ApiSistemaService)
  {
    serv.listarProveedores().subscribe((data:any)=>{
      this.proveedores = data;
      this.busqueda = this.proveedores
      //console.log(data)
    });
  }

  searchProveedor(event){
    const text = event.target.value;
    this.busqueda = this.proveedores;
    if(text && text.trim() != ''){
      this.busqueda = this.busqueda.filter((proveedores:any)=>{
        return(proveedores.nombre.toLowerCase().indexOf(text.toLowerCase())>-1);
      });
    }    
  }

  ngOnInit() {
  }

}

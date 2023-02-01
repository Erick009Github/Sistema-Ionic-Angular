import { Component, OnInit } from '@angular/core';
import { ApiSistemaService } from 'src/app/services/api/api-sistema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articuloss',
  templateUrl: './articulos.page.html',
  styleUrls: ['./articulos.page.scss'],
})
export class ArticulosPage implements OnInit {

  articulos = [];
  busqueda:any;
  constructor(
    private router: Router,
    private serv: ApiSistemaService
  ) {
    serv.listarArticulos().subscribe((data: any) => {
      //console.log('api datos',data)
      this.articulos = data;
      this.busqueda = this.articulos;
    });
  }

  searchArticulo(event){
    const text = event.target.value;
    this.busqueda = this.articulos;
    if(text && text.trim() != ''){
      this.busqueda = this.busqueda.filter((articulos:any)=>{
        return(articulos.nombre.toLowerCase().indexOf(text.toLowerCase())>-1);
      });
    }    
  }

  ngOnInit() {
  }

}


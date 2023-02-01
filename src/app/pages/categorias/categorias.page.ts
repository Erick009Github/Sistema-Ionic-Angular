import { Component, OnInit } from '@angular/core';
import { ApiSistemaService } from 'src/app/services/api/api-sistema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias = [];
  busqueda : any;
  constructor(
    private router: Router,
    private serv: ApiSistemaService
  ) {
    serv.listarCategorias().subscribe((data:any) => {
      //console.log('api datos',data)
      this.categorias = data
      this.busqueda = this.categorias
    })
  }

  searchCategoria(event){
    const text = event.target.value;
    this.busqueda = this.categorias;
    if(text && text.trim() != ''){
      this.busqueda = this.busqueda.filter((categorias:any)=>{
        return(categorias.nombre.toLowerCase().indexOf(text.toLowerCase())>-1);
      });
    }    
  }


  ngOnInit() {
  }

}


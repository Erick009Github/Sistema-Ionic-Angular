import { Component, OnInit } from '@angular/core';
import { ApiSistemaService } from 'src/app/services/api/api-sistema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  
  usuarios = []
  busqueda:any;
  constructor(
    private serv:ApiSistemaService,
    private route:Router
  ) { 
    serv.listarUsuarios().subscribe((data:any)=>{
      this.usuarios = data;
      this.busqueda = this.usuarios;
    });
  }

  
  searchUsuario(event){
    const text = event.target.value;
    this.busqueda = this.usuarios;
    if(text && text.trim() != ''){
      this.busqueda = this.busqueda.filter((usuarios:any)=>{
        return(usuarios.nombre.toLowerCase().indexOf(text.toLowerCase())>-1);
      });
    }    
  }

  ngOnInit() {
  }

}

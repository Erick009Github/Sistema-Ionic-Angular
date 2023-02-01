import { Component, OnInit } from '@angular/core';
import { ApiSistemaService } from 'src/app/services/api/api-sistema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes = [];
  busqueda : any;
  constructor(private router: Router,
    private serv: ApiSistemaService)
    {
      serv.listarClientes().subscribe((data:any)=>{
        this.clientes = data;
        this.busqueda = this.clientes;
      })
    }

    searchCliente(event){
      const text = event.target.value;
      this.busqueda = this.clientes;
      if(text && text.trim() != ''){
        this.busqueda = this.busqueda.filter((clientes:any)=>{
          return(clientes.nombre.toLowerCase().indexOf(text.toLowerCase())>-1);
        });
      }    
    }
  
  ngOnInit() {
  }

}

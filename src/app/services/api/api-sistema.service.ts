import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiSistemaService {

  url = 'http://localhost:8090/'

  constructor(private http: HttpClient,
              private router:Router) {}



  listarCategorias(){
    return this.http.get(this.url+'api/Categorias/Listar')
  }

  listarArticulos(){
    return this.http.get(this.url+'api/Articulos/Listar')
  }

  listarIngresos(){
    return this.http.get(this.url+'api/Ingresos/Listar')
  }

  listarProveedores(){
    return this.http.get(this.url+'api/Personas/ListarProveedores')
  }

  listarVentas(){
    return this.http.get(this.url+'api/Ventas/Listar')
  }

  listarClientes(){
    return this.http.get(this.url+'api/Personas/ListarClientes')
  }

  listarUsuarios(){
    return this.http.get(this.url+'api/Usuarios/Listar')
  }

  listarDetallesIngreso(){
    return this.http.get(this.url+'api/Ingresos/ListarDetalles/{idingreso}')
  }

}
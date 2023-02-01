import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

url = 'https://rickandmortyapi.com/api/character'

// Inyeccion de dependecia HTTP
  constructor(private http: HttpClient) { }

  ObtenerPersonajes(){
    return this.http.get(this.url);

  }
} 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Ev3Service {

  url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

  constructor(private http: HttpClient) { }

  ObtenerDatos(){
    return this.http.get(this.url)
  }
}

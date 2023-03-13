import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Iresponse } from 'src/app/models/iresponse';

@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {

  url = 'http://localhost:8070/'

  constructor(private http: HttpClient,
    private router:Router) { }


}

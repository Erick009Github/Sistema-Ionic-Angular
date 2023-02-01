import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/api/rick-morty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.page.html',
  styleUrls: ['./rest.page.scss'],
})
export class RestPage implements OnInit {

  personajes = [];

// inyectamos el servicio RickMorty
  constructor(
    private rickServ: RickMortyService,
    private router: Router
  ) { 
    rickServ.ObtenerPersonajes().subscribe((data:any)=>{
      console.log('datos desde la api', data.results);
      this.personajes = data.results;
    });

  }

  
  ngOnInit() {
  }

}

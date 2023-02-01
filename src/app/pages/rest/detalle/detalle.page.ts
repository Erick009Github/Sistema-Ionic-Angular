import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  detalleId: string;  
  detalle;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.detalleId = this.activatedRoute.snapshot.paramMap.get('id')

    this.httpClient.get('https://rickandmortyapi.com/api/character/' + this.detalleId)
    .subscribe(res=>{
      this.detalle = res;
      
    });
  }

}

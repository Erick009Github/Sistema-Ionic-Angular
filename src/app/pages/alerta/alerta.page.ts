import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(
    private alertCtrl:AlertController
  ) { }

  ngOnInit() {
  }
   async presentarAlerta(){
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Este es un mensaje en el subheader',
      message: 'Este es el mensaje que se debe presentar cuando ocurra algo ',
      buttons: ['OK'],

    });

    await alert.present();

  }
}

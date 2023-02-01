import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  modulos = [
    { nombre: "Categorías", ruta: "categorias" },
    { nombre: "Artículos", ruta: "articulos" },
    { nombre: "Ingresos", ruta: "ingresos" },
    { nombre: "Proveedores", ruta: "proveedores" },
    { nombre: "Ventas", ruta: "ventas" },
    { nombre: "Clientes", ruta: "clientes" },
    { nombre: "Usuarios", ruta: "usuarios" }
  ];

  constructor(private router: Router,
    private alert: AlertController
  ) { }

  async cerrarSesion() {
    const alert = await this.alert.create({
      header: 'Salir',
      message: '¿Desea cerrar la sesión?',
      buttons: [{
        text: 'No',
        handler: () => { }
      },
      {
        text: 'Si',
        handler: () => {
          localStorage.removeItem('ingresado');
          this.router.navigate(['/login'])
        }
      }]
    });
    await alert.present();
  }
}

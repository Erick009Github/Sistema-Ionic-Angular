import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestPage } from './rest.page';

const routes: Routes = [
  {
    path: '',
    component: RestPage
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestPageRoutingModule {}

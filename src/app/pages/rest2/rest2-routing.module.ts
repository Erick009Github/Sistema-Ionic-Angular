import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rest2Page } from './rest2.page';

const routes: Routes = [
  {
    path: '',
    component: Rest2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rest2PageRoutingModule {}

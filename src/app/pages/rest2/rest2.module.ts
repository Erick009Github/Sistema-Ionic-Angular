import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rest2PageRoutingModule } from './rest2-routing.module';

import { Rest2Page } from './rest2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rest2PageRoutingModule
  ],
  declarations: [Rest2Page]
})
export class Rest2PageModule {}

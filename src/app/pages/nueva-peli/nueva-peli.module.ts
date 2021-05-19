import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaPeliPageRoutingModule } from './nueva-peli-routing.module';

import { NuevaPeliPage } from './nueva-peli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaPeliPageRoutingModule
  ],
  declarations: [NuevaPeliPage]
})
export class NuevaPeliPageModule {}

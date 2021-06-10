import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPeliculasPageRoutingModule } from './mis-peliculas-routing.module';

import { MisPeliculasPage } from './mis-peliculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPeliculasPageRoutingModule
  ],
  declarations: [MisPeliculasPage]
})
export class MisPeliculasPageModule {}

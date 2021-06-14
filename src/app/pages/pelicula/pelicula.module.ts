import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculaPageRoutingModule } from './pelicula-routing.module';

import { PeliculaPage } from './pelicula.page';
import { Tab1Page } from 'src/app/tab1/tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculaPageRoutingModule
  ],
  declarations: [PeliculaPage]
})
export class PeliculaPageModule {}

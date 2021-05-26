import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPersonajePageRoutingModule } from './nuevo-personaje-routing.module';

import { NuevoPersonajePage } from './nuevo-personaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoPersonajePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NuevoPersonajePage]
})
export class NuevoPersonajePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPersonajesPageRoutingModule } from './mis-personajes-routing.module';

import { MisPersonajesPage } from './mis-personajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPersonajesPageRoutingModule
  ],
  declarations: [MisPersonajesPage]
})
export class MisPersonajesPageModule {}

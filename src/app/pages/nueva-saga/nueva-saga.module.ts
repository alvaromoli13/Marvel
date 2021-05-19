import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaSagaPageRoutingModule } from './nueva-saga-routing.module';

import { NuevaSagaPage } from './nueva-saga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaSagaPageRoutingModule
  ],
  declarations: [NuevaSagaPage]
})
export class NuevaSagaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SagaPageRoutingModule } from './saga-routing.module';

import { SagaPage } from './saga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SagaPageRoutingModule
  ],
  declarations: [SagaPage]
})
export class SagaPageModule {}

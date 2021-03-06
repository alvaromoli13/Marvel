import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SagaPage } from './saga.page';

const routes: Routes = [
  {
    path: '',
    component: SagaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SagaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaSagaPage } from './nueva-saga.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaSagaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaSagaPageRoutingModule {}

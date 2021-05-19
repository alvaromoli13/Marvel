import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaPeliPage } from './nueva-peli.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaPeliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaPeliPageRoutingModule {}

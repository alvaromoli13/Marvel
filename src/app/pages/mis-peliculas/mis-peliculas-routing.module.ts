import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPeliculasPage } from './mis-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: MisPeliculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPeliculasPageRoutingModule {}

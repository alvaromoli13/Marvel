import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPersonajesPage } from './mis-personajes.page';

const routes: Routes = [
  {
    path: '',
    component: MisPersonajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPersonajesPageRoutingModule {}

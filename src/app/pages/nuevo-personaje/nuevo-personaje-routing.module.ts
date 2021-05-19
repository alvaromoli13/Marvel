import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPersonajePage } from './nuevo-personaje.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPersonajePageRoutingModule {}

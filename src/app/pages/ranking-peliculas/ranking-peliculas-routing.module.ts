import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingPeliculasPage } from './ranking-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: RankingPeliculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankingPeliculasPageRoutingModule {}

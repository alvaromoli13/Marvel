import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankingPeliculasPageRoutingModule } from './ranking-peliculas-routing.module';

import { RankingPeliculasPage } from './ranking-peliculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankingPeliculasPageRoutingModule
  ],
  declarations: [RankingPeliculasPage]
})
export class RankingPeliculasPageModule {}

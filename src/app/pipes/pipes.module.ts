import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPeliPipe } from './filtro-peli.pipe';
import { FiltroPersonajePipe } from './filtro-personaje.pipe';



@NgModule({
  declarations: [FiltroPeliPipe, FiltroPersonajePipe],
  exports:[FiltroPeliPipe, FiltroPersonajePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

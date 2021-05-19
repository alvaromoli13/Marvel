import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pelicula',
    loadChildren: () => import('./pages/pelicula/pelicula.module').then( m => m.PeliculaPageModule)
  },
  {
    path: 'personaje',
    loadChildren: () => import('./pages/personaje/personaje.module').then( m => m.PersonajePageModule)
  },
  {
    path: 'saga',
    loadChildren: () => import('./pages/saga/saga.module').then( m => m.SagaPageModule)
  },
  {
    path: 'nueva-peli',
    loadChildren: () => import('./pages/nueva-peli/nueva-peli.module').then( m => m.NuevaPeliPageModule)
  },
  {
    path: 'nuevo-personaje',
    loadChildren: () => import('./pages/nuevo-personaje/nuevo-personaje.module').then( m => m.NuevoPersonajePageModule)
  },
  {
    path: 'nueva-saga',
    loadChildren: () => import('./pages/nueva-saga/nueva-saga.module').then( m => m.NuevaSagaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

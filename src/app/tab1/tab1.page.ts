import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PeliculaPage } from '../pages/pelicula/pelicula.page';
import { NuevaPeliPage } from '../pages/nueva-peli/nueva-peli.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  admin = 1;
  constructor(public modalController: ModalController) {}

  async abrirPeli() {
    const modal = await this.modalController.create({
      component: PeliculaPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }

  async nuevaPeli() {
    const modal = await this.modalController.create({
      component: NuevaPeliPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }
}

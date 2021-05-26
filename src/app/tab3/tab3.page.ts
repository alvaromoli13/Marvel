import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PeliculaPage } from '../pages/pelicula/pelicula.page';
import { NuevaSagaPage } from '../pages/nueva-saga/nueva-saga.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalController: ModalController) {}

  admin = 1;
  async nuevaSaga() {
    const modal = await this.modalController.create({
      component: NuevaSagaPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }

}

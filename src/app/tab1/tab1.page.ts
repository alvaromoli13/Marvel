import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PeliculaPage } from '../pages/pelicula/pelicula.page';
import { NuevaPeliPage } from '../pages/nueva-peli/nueva-peli.page';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  admin = 1;
  constructor(public modalController: ModalController, public restService: RestService) {}

  async abrirPeli() {
    const modal = await this.modalController.create({
      component: PeliculaPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'Titulo': "Los Vengadores",
        'SagaId': "Vengadores",
        'Imagen': "assets/Vengadores.jpg",
        'Sipnosis': "",
        'Estreno': "11-04-2012"
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

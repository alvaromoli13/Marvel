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

  admin = this.restService.token.success.admin;
  peliculas: any;
  constructor(public modalController: ModalController, public restService: RestService) {}

  ionViewDidEnter(){
    this.getPelis();
  }
  async abrirPeli(titulo, sagaid, imagen, sipnosis, estreno, peliId) {
    const modal = await this.modalController.create({
      component: PeliculaPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'Titulo': titulo,
        'SagaId': sagaid,
        'Imagen': imagen,
        'Sipnosis': sipnosis,
        'Estreno': estreno,
        'PeliId': peliId
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

  getPelis(){
    this.restService.getFilms(this.restService.token.success.token).then(data=>{
      this.peliculas = data.Peliculas;
    })
  }

}

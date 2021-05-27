import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PeliculaPage } from '../pages/pelicula/pelicula.page';
import { NuevaSagaPage } from '../pages/nueva-saga/nueva-saga.page';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalController: ModalController, public restService: RestService) {}

  sagas:any;
  ionViewDidEnter(){
    this.getSagas()
  }
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

  getSagas(){
    this.restService.getSagas().then(data=>{
      this.sagas = data.Sagas;
    })
  }

}

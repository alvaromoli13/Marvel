import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PeliculaPage } from '../pages/pelicula/pelicula.page';
import { NuevaSagaPage } from '../pages/nueva-saga/nueva-saga.page';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalController: ModalController, public restService: RestService, public alertController: AlertController) {}

  sagas:any;
  ionViewDidEnter(){
    this.getSagas()
  }
  admin = this.restService.token.success.admin;
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
    this.restService.getSagas(this.restService.token.success.token).then(data=>{
      this.sagas = data.Sagas;
    })
  }

  async deleteSaga(idSaga) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Seguro deseas eliminar la saga seleccionada?',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: (blah) => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            this.restService.deleteSaga(this.restService.token.success.token, idSaga).then(data=>{
              console.log(data)
            })
          }
        }
      ]
    });
    await alert.present();
  }

}

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

  async actualizarSaga(nombre, estreno, sagaid) {
    const modal = await this.modalController.create({
      component: NuevaSagaPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'Nombre':nombre,
        'Estreno': estreno,
        'SagaId': sagaid
      }
    });
    return await modal.present();
  }

  getSagas(){
    this.restService.getSagas(this.restService.token.success.token).then(async data=>{
      this.sagas = data.Sagas;
      await this.sagas.sort((a,b) =>{
        if(a.estreno < b.estreno){
          return 1;
        }

        if(a.estreno > b.estreno){
          return -1;
        }

        return 0;
      });
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
            this.getSagas();
          }
        }
      ]
    });
    await alert.present();
  }

}

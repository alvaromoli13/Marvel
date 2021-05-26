import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonajePage } from '../pages/personaje/personaje.page';
import { NuevoPersonajePage } from '../pages/nuevo-personaje/nuevo-personaje.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) {}
  admin=1;
  async abrirPersonaje() {
    const modal = await this.modalController.create({
      component: PersonajePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'Nombre': "Capitan America",
        'Descripcion': "",
        'Imagen': "assets/Capitan.jpg",
        'SagaId': "Vengadore"
      }
    });
    return await modal.present();
  }

  async nuevoPersonaje() {
    const modal = await this.modalController.create({
      component: NuevoPersonajePage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }

}

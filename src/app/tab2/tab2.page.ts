import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonajePage } from '../pages/personaje/personaje.page';
import { NuevoPersonajePage } from '../pages/nuevo-personaje/nuevo-personaje.page';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  

  constructor(public modalController: ModalController, public restService: RestService) {
    
  }
  personajes: any;
  admin=1;

  ionViewDidEnter(){
    this.getPersonajes()
  }
  async abrirPersonaje(nombre, descripcion, imagen, idSaga, persoId) {
    const modal = await this.modalController.create({
      component: PersonajePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'Nombre': nombre,
        'Descripcion': descripcion,
        'Imagen': imagen,
        'SagaId': idSaga,
        'PersoId': persoId
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

  async getPersonajes(){
    this.restService.getCharacters().
    then(data=>{
      this.personajes = data.Personajes;
    })
  }
  

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../../services/rest.service';
import { PersonajePage } from '../personaje/personaje.page';

@Component({
  selector: 'app-mis-personajes',
  templateUrl: './mis-personajes.page.html',
  styleUrls: ['./mis-personajes.page.scss'],
})
export class MisPersonajesPage implements OnInit {

  constructor(public restService: RestService, public modalController: ModalController) { }

  Personajes: any

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getPersonajes()
  }

  getPersonajes(){
    this.restService.getPersonajesGuardados(this.restService.token.success.token, this.restService.token.success.id).then(data=>{
      this.Personajes = data.Guardado
    })
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
}

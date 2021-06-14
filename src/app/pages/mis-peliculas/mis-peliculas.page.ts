import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../../services/rest.service';
import { PeliculaPage } from '../pelicula/pelicula.page';

@Component({
  selector: 'app-mis-peliculas',
  templateUrl: './mis-peliculas.page.html',
  styleUrls: ['./mis-peliculas.page.scss'],
})
export class MisPeliculasPage implements OnInit {

  constructor(public restService: RestService, public modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getPeliculas();
  }

  Peliculas:any;

  getPeliculas(){
    this.restService.getPeliculasGuardadas(this.restService.token.success.token, this.restService.token.success.id).then(data=>{
      this.Peliculas = data.Guardado;
    })
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



}

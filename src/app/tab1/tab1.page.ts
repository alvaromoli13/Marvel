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
  primero: any;
  segundo: any;
  tercero: any;  
  valorPrimero: any;
  valorSegundo: any;
  valorTercero: any; 
  
  textoBuscar = '';
  constructor(public modalController: ModalController, public restService: RestService) {
    this.getPelis();
  }

  ionViewDidEnter(){
    this.getPelis();
    this.ranking();
  }


  ionViewWillEnter(){
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

  async getPelis(){
    await this.restService.getFilms(this.restService.token.success.token).then(data=>{
      this.peliculas = data.Peliculas;
    })
  }

  buscar( event ){
    this.textoBuscar = event.detail.value;
  }

  async ranking(){
    this.primero = 0;
    this.segundo = 0;
    this.tercero = 0;
    this.valorPrimero = 0;
    this.valorSegundo = 0;
    this.valorTercero = 0;

    await this.getPelis();
    for(let i = 0; i < this.peliculas.length; i ++){
      await this.restService.getMeGustaTotalesPelicula(this.restService.token.success.token, this.peliculas[i].id).then(data =>{
        if(data.MeGusta.length > this.valorPrimero){
          this.valorTercero = this.valorSegundo;
          this.tercero = this.segundo;
          this.valorSegundo = this.valorPrimero;
          this.segundo = this.primero

          this.primero = this.peliculas[i].id;
          this.valorPrimero = data.MeGusta.length;
        }
        else if(data.MeGusta.length > this.valorSegundo){
          this.valorTercero = this.valorSegundo;
          this.tercero = this.segundo;
          this.segundo = this.peliculas[i].id;
          this.valorSegundo = data.MeGusta.length;
        }
        else if(data.MeGusta.length > this.valorTercero){
          this.tercero = this.peliculas[i].id;
          this.valorTercero = data.MeGusta.length;
        }
      })
    }

    console.log(this.valorPrimero);
    console.log(this.valorSegundo);
    console.log(this.valorTercero);
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { PeliculaPage } from '../pelicula/pelicula.page';

@Component({
  selector: 'app-ranking-peliculas',
  templateUrl: './ranking-peliculas.page.html',
  styleUrls: ['./ranking-peliculas.page.scss'],
})
export class RankingPeliculasPage implements OnInit {

  constructor(public restService: RestService, public modalController: ModalController) { 
  }
  peliculas: any;
  primero:any;
  segundo:any;
  tercero:any;
  valorPrimero:any;
  valorSegundo:any;
  valorTercero:any;
  peli1=[];
  peli2= [];
  peli3 = [];

  ngOnInit() {
    this.ranking();
  }

  ionViewDidEnter(){
    this.ranking();
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
        if(data.MeGusta.length >= this.valorPrimero){
          this.valorTercero = this.valorSegundo;
          this.tercero = this.segundo;
          this.valorSegundo = this.valorPrimero;
          this.segundo = this.primero;

          this.primero = this.peliculas[i].id;
          this.valorPrimero = data.MeGusta.length;
          console.log(this.valorSegundo);
        }
        else if(data.MeGusta.length > this.valorSegundo){
          this.valorTercero = this.valorSegundo;
          this.tercero = this.segundo;
          this.segundo = this.peliculas[i].id;
          this.valorSegundo = data.MeGusta.length;
        }
        else if(data.MeGusta.length >= this.valorTercero){
          this.tercero = this.peliculas[i].id;
          this.valorTercero = data.MeGusta.length;
        }
      })
    }
    await this.restService.getFilm(this.restService.token.success.token, this.primero).then(data=>{
      this.peli1 = data.Pelicula[0];
    });
    await this.restService.getFilm(this.restService.token.success.token, this.segundo).then(data=>{
      this.peli2 = data.Pelicula[0];
    });
    await this.restService.getFilm(this.restService.token.success.token, this.tercero).then(data=>{
      this.peli3 = data.Pelicula[0];
    });
  }

  async getPelis(){
    await this.restService.getFilms(this.restService.token.success.token).then(data=>{
      this.peliculas = data.Peliculas;
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

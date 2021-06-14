import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-peli',
  templateUrl: './nueva-peli.page.html',
  styleUrls: ['./nueva-peli.page.scss'],
})
export class NuevaPeliPage implements OnInit {

  constructor(public modalCtrl: ModalController, public restService: RestService, public router: Router) { }

  titulo = new FormControl('');
  saga = new FormControl('');
  fechaEstreno = new FormControl('');
  sinopsis = new FormControl('');
  imagen = new FormControl('');
  fechaEstrenoBuena: any;
  imagenBuena: any;
  actualizar: any;

  @Input() Titulo: any;
  @Input() SagaId: any;
  @Input() Imagen: any;
  @Input() Sipnosis: any;
  @Input() Estreno: any;
  @Input() PeliId: any;

  new = 1;

  sagas: any;
  ngOnInit() {
    this.getsagas();
    this.actualizarNO();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  actualizarNO(){
    if(this.PeliId == undefined){
      this.actualizar = 0;
    }
    else{
      this.actualizar = 1;
    }
  }

  ajustarFechaImagen(){
    this.ajustarFecha();

    this.imagenBuena = this.imagen.value.split('\\');
    this.imagenBuena = this.imagenBuena[2];

  }

  ajustarFecha(){
    this.fechaEstrenoBuena = this.fechaEstreno.value.split('T');
    this.fechaEstrenoBuena = this.fechaEstrenoBuena[0];
  }

  registrar(){
    if(this.actualizar == 0){
      this.ajustarFechaImagen();
      this.restService.createFilm(this.restService.token.success.token,this.titulo.value, this.sinopsis.value, this.imagenBuena, this.saga.value, this.fechaEstrenoBuena).then(data=>{
        console.log(data);
      })
    }
    else{
      if(this.imagen.value == ''){
        this.ajustarFecha();
        this.restService.updateFilm(this.restService.token.success.token, this.PeliId,this.titulo.value, this.sinopsis.value, this.Imagen, this.saga.value, this.fechaEstrenoBuena).then(data=>{
          console.log(data);
        })
      }
      else{
        this.ajustarFechaImagen();
        this.restService.updateFilm(this.restService.token.success.token, this.PeliId,this.titulo.value, this.sinopsis.value, this.imagenBuena, this.saga.value, this.fechaEstrenoBuena).then(data=>{
          console.log(data);
        })
      }
    }
    this.dismiss();
  }

  getsagas(){
    this.restService.getSagas(this.restService.token.success.token).then(data=>{
      this.sagas = data.Sagas
    })
  }
}

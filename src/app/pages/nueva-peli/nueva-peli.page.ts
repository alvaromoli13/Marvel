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

  @Input() Titulo: any;
  @Input() SagaId: any;

  new = 1;

  sagas: any;
  ngOnInit() {
    this.getsagas()
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  ajustarFechaImagen(){
    this.fechaEstrenoBuena = this.fechaEstreno.value.split('T');
    this.fechaEstrenoBuena = this.fechaEstrenoBuena[0];

    this.imagenBuena = this.imagen.value.split('\\');
    this.imagenBuena = this.imagenBuena[2];

  }

  registrar(){
    this.ajustarFechaImagen();
    this.restService.createFilm(this.restService.token.success.token,this.titulo.value, this.sinopsis.value, this.imagenBuena, this.saga.value, this.fechaEstrenoBuena).then(data=>{
      console.log(data);
    })
    this.dismiss();
  }

  getsagas(){
    this.restService.getSagas(this.restService.token.success.token).then(data=>{
      this.sagas = data.Sagas
    })
  }
}

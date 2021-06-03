import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.page.html',
  styleUrls: ['./nuevo-personaje.page.scss'],
})
export class NuevoPersonajePage implements OnInit {

  constructor(public modalCtrl:ModalController, public restService: RestService) { }


  nombre = new FormControl('');
  saga = new FormControl('');
  imagen = new FormControl('');
  descripcion = new FormControl('');
  imagenBuena: any;
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

  ajustarImagen(){
    this.imagenBuena = this.imagen.value.split('\\');
    this.imagenBuena = this.imagenBuena[2];
  }

  getsagas(){
    this.restService.getSagas().then(data=>{
      this.sagas = data.Sagas
    })
  }

  registrar(){
    this.ajustarImagen();
    this.restService.createCharacter(this.restService.token.success.token,this.nombre.value, this.descripcion.value, this.imagenBuena, this.saga.value).then(data=>{
      console.log(data)
    })
    this.dismiss();
  }

}

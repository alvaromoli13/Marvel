import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.page.html',
  styleUrls: ['./nuevo-personaje.page.scss'],
})
export class NuevoPersonajePage implements OnInit {

  constructor(public modalCtrl:ModalController) { }

  sagas = [
    {
      id: 1,
      titulo: 'Vengadores'
    },
    {
      id: 2,
      titulo: 'X-Men'
    }
  ]

  nombre = new FormControl('');
  saga = new FormControl('');
  imagen = new FormControl('');
  descripcion = new FormControl('');
  imagenBuena: any;

  ngOnInit() {
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

  registrar(){
    this.ajustarImagen();
    console.log(this.nombre.value, this.descripcion.value, this.saga.value, this.imagenBuena);
    this.dismiss();
  }

}

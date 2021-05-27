import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nueva-peli',
  templateUrl: './nueva-peli.page.html',
  styleUrls: ['./nueva-peli.page.scss'],
})
export class NuevaPeliPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  titulo = new FormControl('');
  saga = new FormControl('');
  fechaEstreno = new FormControl('');
  sipnosis = new FormControl('');
  imagen = new FormControl('');
  fechaEstrenoBuena: any;
  imagenBuena: any;

  @Input() Titulo: any;
  @Input() SagaId: any;

  new = 1;

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
  ngOnInit() {
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
    console.log(this.titulo.value,this.saga.value, this.fechaEstrenoBuena, this.imagenBuena, this.sipnosis.value);
    this.dismiss();
  }
}

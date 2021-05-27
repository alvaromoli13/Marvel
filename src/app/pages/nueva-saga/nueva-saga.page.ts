import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nueva-saga',
  templateUrl: './nueva-saga.page.html',
  styleUrls: ['./nueva-saga.page.scss'],
})
export class NuevaSagaPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  estreno = new FormControl('');
  nombre = new FormControl('');
  fechaEstreno: any;

  ngOnInit() {
  }

  ajustarFecha(){
    this.fechaEstreno = this.estreno.value.split('T');
    this.fechaEstreno = this.fechaEstreno[0];
  }

  registrar(){
    this.ajustarFecha();
    console.log(this.fechaEstreno, this.nombre.value);
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}

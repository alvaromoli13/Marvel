import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NuevaSagaPage } from '../nueva-saga/nueva-saga.page';

@Component({
  selector: 'app-saga',
  templateUrl: './saga.page.html',
  styleUrls: ['./saga.page.scss'],
})
export class SagaPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: NuevaSagaPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }
}

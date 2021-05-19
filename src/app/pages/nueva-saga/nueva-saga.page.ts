import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nueva-saga',
  templateUrl: './nueva-saga.page.html',
  styleUrls: ['./nueva-saga.page.scss'],
})
export class NuevaSagaPage implements OnInit {

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

}

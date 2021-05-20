import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NuevaPeliPage } from '../nueva-peli/nueva-peli.page';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }
  admin = 1;
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
      component: NuevaPeliPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }

}

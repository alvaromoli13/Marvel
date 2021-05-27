import { Component, OnInit, Input } from '@angular/core';
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
  guarda = 0;
  gusta = 0;

  @Input() Titulo: any;
  @Input() SagaId: any;
  @Input() Imagen: any;
  @Input() Sipnosis: any;
  @Input() Estreno: any;
  @Input() PeliId: any;

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
        'Titulo': "Vengadores",
        'SagaId': 1
      }
    });
    return await modal.present();
  }

  guardar(){
    if (this.guarda == 1){
      this.guarda = 0;
    }
    else{
      this.guarda = 1;
    }
  }

  meGusta(){
    if (this.gusta == 1){
      this.gusta = 0;
    }
    else{
      this.gusta = 1;
    }
  }

}

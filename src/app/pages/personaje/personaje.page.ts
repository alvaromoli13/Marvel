import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NuevoPersonajePage } from '../nuevo-personaje/nuevo-personaje.page';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
})
export class PersonajePage implements OnInit {

  constructor(public modalCtrl: ModalController) { }
  @Input() Nombre: any;
  @Input() SagaId: any;
  @Input() Imagen: any;
  @Input() Descripcion: any;
  @Input() PersoId: any;

  admin=1;
  guarda = 0;
  gusta = 0;
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
      component: NuevoPersonajePage,
      cssClass: 'my-custom-class',
      componentProps: {
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

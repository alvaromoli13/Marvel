import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nueva-peli',
  templateUrl: './nueva-peli.page.html',
  styleUrls: ['./nueva-peli.page.scss'],
})
export class NuevaPeliPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }
  @Input() Titulo: any;
  @Input() SagaId: any;
  @Input() FechaEstreno: any;
  @Input() Sipnosis: any;
  @Input() Imagen: any;

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
}

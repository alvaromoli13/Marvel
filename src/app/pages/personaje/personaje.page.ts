import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { NuevoPersonajePage } from '../nuevo-personaje/nuevo-personaje.page';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
})
export class PersonajePage implements OnInit {

  constructor(public modalCtrl: ModalController, public restService: RestService, public alertController: AlertController) { }
  @Input() Nombre: any;
  @Input() SagaId: any;
  @Input() Imagen: any;
  @Input() Descripcion: any;
  @Input() PersoId: any;

  admin=this.restService.token.success.admin;
  guarda = 0;
  gusta = 0;
  saga:any;
  ngOnInit() {
    this.getSaga();
  }

  getSaga(){
    this.restService.getSaga('aa', this.SagaId).then(data =>{
      this.saga = data.Saga[0].nombre
    })
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

  async eliminarPersonaje(idPersonaje) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Seguro deseas eliminar el personaje?',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: (blah) => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            this.restService.deleteCharacter('aaa', idPersonaje).then(data=>{
              console.log(data)
            })
          }
        }
      ]
    });
    await alert.present();
  }


 

}

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
  meGustas:any
  guardados:any;
  saga:any;

  ngOnInit() {
    this.getSaga();
  }

  ionViewWillEnter(){
    this.mostrarMeGustas()
    this.mostrarGuardados()
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
    this.restService.crearGuardadoPersonaje(this.restService.token.success.id, this.PersoId);
    this.guarda = 1;
  }

  noGuardar(){
    this.restService.deleteGuardadoPersonaje('token', this.PersoId, this.restService.token.success.id)
    this.guarda = 0;
  }

  meGusta(){
    this.restService.crearMeGustaPersonaje(this.restService.token.success.id, this.PersoId)
    this.gusta = 1;
  }

  noMeGusta(){
    this.restService.deleteMeGustaPersonaje('token',this.PersoId, this.restService.token.success.id)
    this.gusta = 0;
  }

  mostrarGuardados(){
    this.restService.getGuardadosTotalesPersonaje('token', this.PersoId).then(data=>{
      this.guardados = data.Guardado;
      for(let i = 0; i<this.guardados.length; i++){
        if(this.guardados[i].idUsuario == this.restService.token.success.id){
          this.guarda = 1
        }
      }
    })
  }

  mostrarMeGustas(){
    this.restService.getMeGustaTotalesPersonaje('token', this.PersoId).then(data=>{
      this.meGustas = data.MeGusta;
      for(let i = 0; i<this.meGustas.length; i++){
        if(this.meGustas[i].idUsuario == this.restService.token.success.id){
          this.gusta = 1
        }
      }
    })
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

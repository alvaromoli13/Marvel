import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { NuevaPeliPage } from '../nueva-peli/nueva-peli.page';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {

  constructor(public modalCtrl: ModalController, public restService: RestService, public alertController : AlertController) { }
  admin = 1;
  guarda = 0;
  gusta = 0;
  saga: any;
  comentarios:any;

  @Input() Titulo: any;
  @Input() SagaId: any;
  @Input() Imagen: any;
  @Input() Sipnosis: any;
  @Input() Estreno: any;
  @Input() PeliId: any;

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getComentarios();
    this.getSaga();
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

  getSaga(){
    this.restService.getSaga('aa', this.SagaId).then(data =>{
      this.saga = data.Saga[0].nombre
    })
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

  async eliminarPeli(idPeli) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Seguro deseas eliminar la pelicula?',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: (blah) => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            this.restService.deleteFilm('aaa', idPeli).then(data=>{
              console.log(data)
            })
          }
        }
      ]
    });
    await alert.present();
  }

  async crearComentario() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nuevo Comentario',
      inputs: [
        {
          name: 'comentario',
          type: 'textarea',
          placeholder: 'Escribe aqui tu comentario'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'Crear',
          handler: (dato) => {
            console.log(dato.comentario);
          }
        }
      ]
    });

    await alert.present();
  }

  async ver(nombre, descripcion){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: nombre,
      message: descripcion
    });

    await alert.present();
  }

  getComentarios(){
    this.restService.getComentarios('aaa', this.PeliId).then(data=>{
      this.comentarios = data.Comentario;
    })
  }

  async bloquearComentario(idComentario){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Seguro deseas bloquear el comentario?',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: (blah) => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            this.restService.bloquearComentario(idComentario).then(data=>{

            })
          }
        }
      ]
    });
    await alert.present();
  }
}

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
  admin = this.restService.token.success.admin;
  guarda = 0;
  gusta = 0;
  saga: any;
  comentarios:any;
  meGustas:any
  guardados:any;

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
    this.mostrarGuardados();
    this.mostrarMeGustas();
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
    this.restService.crearGuardadoPelicula(this.restService.token.success.id, this.PeliId);
    this.guarda = 1;
  }

  noGuardar(){
    this.restService.deleteGuardadoPelicula('tok', this.PeliId, this.restService.token.success.id);
    this.guarda=0;
  }

  async meGusta(){
    await this.restService.crearMeGustaPelicula(this.restService.token.success.id, this.PeliId);
    await this.mostrarMeGustas();
    this.gusta = 1;
  }
  
  async noMeGusta(){
    await this.restService.deleteMeGustaPelicula('tok', this.PeliId, this.restService.token.success.id);
    await this.mostrarMeGustas();
    this.gusta = 0;
  }

  mostrarGuardados(){
    this.restService.getGuardadosTotalesPelicula('token', this.PeliId).then(data=>{
      this.guardados = data.Guardado;
      for(let i = 0; i<this.guardados.length; i++){
        if(this.guardados[i].idUsuario == this.restService.token.success.id){
          this.guarda = 1
        }
      }
    })
  }

  mostrarMeGustas(){
    this.restService.getMeGustaTotalesPelicula('token', this.PeliId).then(data=>{
      this.meGustas = data.MeGusta;
      for(let i = 0; i<this.meGustas.length; i++){
        if(this.meGustas[i].idUsuario == this.restService.token.success.id){
          this.gusta = 1
        }
      }
    })
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
            this.restService.crearComentario(dato.comentario, this.restService.token.success.id, this.PeliId)
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

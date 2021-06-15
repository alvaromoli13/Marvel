import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.page.html',
  styleUrls: ['./nuevo-personaje.page.scss'],
})
export class NuevoPersonajePage implements OnInit {

  constructor(public modalCtrl:ModalController, public restService: RestService, public router: Router) { }


  nombre = new FormControl('');
  saga = new FormControl('');
  imagen = new FormControl('');
  descripcion = new FormControl('');
  imagenBuena: any;
  sagas: any;
  actualizar:any;

  @Input() Nombre: any;
  @Input() SagaId: any;
  @Input() Imagen: any;
  @Input() Descripcion: any;
  @Input() PersoId: any;

  ngOnInit() {
    this.getsagas();
    this.actualizarNO();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  actualizarNO(){
    if(this.PersoId == undefined){
      this.actualizar = 0;
    }
    else{
      this.actualizar = 1;
    }
  }

  ajustarImagen(){
    this.imagenBuena = this.imagen.value.split('\\');
    this.imagenBuena = this.imagenBuena[2];
  }

  getsagas(){
    this.restService.getSagas(this.restService.token.success.token).then(data=>{
      this.sagas = data.Sagas
    })
  }

  registrar(){
    if(this.actualizar == 0){
      this.ajustarImagen();
      this.restService.createCharacter(this.restService.token.success.token,this.nombre.value, this.descripcion.value, this.imagenBuena, this.saga.value).then(data=>{
        
      })
    }
    else{
      if(this.imagen.value == ''){
        this.restService.UpdateCharacter(this.restService.token.success.token,this.PersoId ,this.nombre.value, this.descripcion.value, this.Imagen, this.saga.value).then(data=>{
        
        })
      }
      else{
        this.ajustarImagen();
        this.restService.UpdateCharacter(this.restService.token.success.token,this.PersoId ,this.nombre.value, this.descripcion.value, this.imagenBuena, this.saga.value).then(data=>{
        
        })
      }
    }
    
    this.dismiss();
  }

}

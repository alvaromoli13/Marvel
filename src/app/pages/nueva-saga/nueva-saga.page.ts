import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-saga',
  templateUrl: './nueva-saga.page.html',
  styleUrls: ['./nueva-saga.page.scss'],
})
export class NuevaSagaPage implements OnInit {

  constructor(public modalCtrl: ModalController, public restService: RestService, public router: Router) { }

  estreno = new FormControl('');
  nombre = new FormControl('');
  fechaEstreno: any;

  @Input() Nombre: any;
  @Input() Estreno: any;
  @Input() SagaId: any;

  actualizar:any;


  ngOnInit() {
    this.actualizarNO();
  }

  actualizarNO(){
    if(this.SagaId == undefined){
      this.actualizar = 0;
    }
    else{
      this.actualizar = 1;
    }
  }


  ajustarFecha(){
    this.fechaEstreno = this.estreno.value.split('T');
    this.fechaEstreno = this.fechaEstreno[0];
  }

  registrar(){
    if(this.actualizar == 0){
      this.ajustarFecha();
      this.restService.createSaga(this.restService.token.success.token,this.nombre.value, this.fechaEstreno).then(data=>{
        console.log(data);
      })

    }
    else{
      this.ajustarFecha();
      this.restService.updateSaga(this.restService.token.success.token, this.SagaId,this.nombre.value, this.fechaEstreno).then(data=>{
        console.log(data);
      })
    }
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }



}

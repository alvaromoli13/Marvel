import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  registrado=true;
  noRegistrado=false;
  password = new FormControl('');
  email = new FormControl('');
  c_password = new FormControl('');
  name = new FormControl('');

  constructor(public restService: RestService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  registrarse(){
    this.registrado=false;
    this.noRegistrado=true;
  }

  modoInicio(){
    this.registrado=true;
    this.noRegistrado=false;
  }

  crearCuenta(){
    if(this.name.value == ''){
      this.contrasCortas('El campo name debe de ser rellenado');
    }
    else{
      if(this.password.value == this.c_password.value){
        if(this.password.value.length >= 6 ){
          this.restService.register(this.name.value, this.email.value, this.password.value, this.c_password.value).then(data=>{
            if (this.restService.token.success.token != null){
              this.router.navigate(['/tabs']);
            }
          })
        }
        else{
          this.contrasCortas('La contraseña debe de etner al menos 6 caracteres');
  
        }
      
        
      }
      else{
        this.contrasCortas('Las contraseñas deben de coincidir');
      }
    }
    
  }

  login(){
    this.restService.login(this.email.value, this.password.value).then(data=>{
      if (this.restService.token.success.token != null){
        this.router.navigate(['/tabs']);
      }
    })
    
  }


  async contrasCortas(texto) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: texto,
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }

}

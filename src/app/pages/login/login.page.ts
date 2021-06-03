import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest.service';

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

  constructor(public restService: RestService, public router: Router) { }

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
  // crearCuenta(){
  //   this.restService.register(this.name.value, this.email.value, this.password.value, this.c_password.value).then(data=>{
  //     if (this.restService.token.success.token != null){
  //       this.router.navigate(['/tab-principal']);
  //     }
  //   })
  // }

  login(){
    this.restService.login(this.email.value, this.password.value).then(data=>{
      if (this.restService.token.success.token != null){
        this.router.navigate(['/tabs']);
      }
    })
    
  }

}

import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-mis-personajes',
  templateUrl: './mis-personajes.page.html',
  styleUrls: ['./mis-personajes.page.scss'],
})
export class MisPersonajesPage implements OnInit {

  constructor(public restService: RestService) { }

  Personajes: any

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getPersonajes()
  }

  getPersonajes(){
    this.restService.getPersonajesGuardados(this.restService.token.success.token, this.restService.token.success.id).then(data=>{
      this.Personajes = data.Guardado
    })
  }
}

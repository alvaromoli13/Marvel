import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-mis-peliculas',
  templateUrl: './mis-peliculas.page.html',
  styleUrls: ['./mis-peliculas.page.scss'],
})
export class MisPeliculasPage implements OnInit {

  constructor(public restService: RestService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getPeliculas();
  }

  Peliculas:any;

  getPeliculas(){
    this.restService.getPeliculasGuardadas(this.restService.token.success.token, this.restService.token.success.id).then(data=>{
      this.Peliculas = data.Guardado;
    })
  }



}

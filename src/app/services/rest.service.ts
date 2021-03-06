import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = 'http://marvelfilms.allsites.es/public/api';
  token: any;
  constructor(private http: HttpClient, public alertController: AlertController) { }


  login(email:any, password:any) {
    return new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/login',
      {
        email: email,
        password: password
      })
        .subscribe(data => {
          this.token = data;
          resolve(data);
        }, async err => {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Error',
            subHeader: 'Credenciales no validas',
            message: '',
            buttons: ['OK']
          });
      
          await alert.present();
          console.log(err);
        });
    });
  }

  register(name:any, email:any, password:any, c_password:any) {
    return new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/register',
      {
        name: name,
        email: email,
        password: password,
        c_password: c_password
      })
        .subscribe(data => {
          this.token = data;
          resolve(data);
        }, async err => {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Error',
            subHeader: 'E-mail no valido o no disponible',
            message: '',
            buttons: ['OK']
          });
          await alert.present();
          console.log(err);
        });
    });
  }

  async getCharacters(tok: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/personajes', {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getFilms(tok: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/peliculas', {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async createCharacter(tok:any, nombre:any, descripcion:any, imagen:any, idSaga:any) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/personajes',
      {
        nombre: nombre,
        descripcion: descripcion,
        imagen: imagen,
        idSaga: idSaga
      },
      {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async createFilm(tok:any, nombre:any, descripcion:any, imagen:any, idSaga:any, estreno:any) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/peliculas',
      {
        nombre: nombre,
        sipnosis: descripcion,
        imagen: imagen,
        idSaga: idSaga,
        estreno: estreno
      },
      {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async createSaga(tok:any, nombre:any, estreno:any) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/sagas',
      {
        nombre: nombre,
        estreno: estreno,
      },
      {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  async getSaga(tok: any, id:any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/sagas/'+id, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getSagas(tok: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/sagas', {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async deleteSaga(tok: any, id: any) {
    return await new Promise<any>(resolve => {
      this.http.delete(this.apiUrl + '/sagas/'+id, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async deleteFilm(tok: any, id: any) {
    return await new Promise<any>(resolve => {
      this.http.delete(this.apiUrl + '/peliculas/'+id, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async deleteCharacter(tok: any, id: any) {
    return await new Promise<any>(resolve => {
      this.http.delete(this.apiUrl + '/personajes/'+id, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getComentarios(tok: any, id:any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/comentariosPeli/'+id, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async bloquearComentario(tok:any, id:any) {
    return await new Promise<any>(resolve => {
      this.http.put(this.apiUrl + '/comentarios/'+id,
      {
        bloqueado: 1,
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async crearComentario(tok:any, descripcion:any, idUsuario:any, idPelicula:any) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/comentarios',
      {
        descripcion: descripcion,
        idUsuario: idUsuario,
        idPelicula: idPelicula
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async getComentario(tok: any, id:any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/comentarios/'+id, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getMeGustaTotalesPersonaje(tok: any, idPersonaje?:any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/meGustaPersonaje/'+idPersonaje, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async crearMeGustaPersonaje(tok:any, idUsuario:any, idPersonaje:any) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/meGustaPersonajes',
      {
        idUsuario: idUsuario,
        idPersonaje: idPersonaje,
      },
      {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async deleteMeGustaPersonaje(tok: any, idPersonaje: any, idUsuario: any) {
    return await new Promise<any>(resolve => {
      this.http.delete(this.apiUrl + '/eliminarMPersonaje/'+idPersonaje+'.'+idUsuario, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getGuardadosTotalesPersonaje(tok: any, idPersonaje:any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/guardadoPersonaje/'+idPersonaje, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async crearGuardadoPersonaje(tok:any, idUsuario:any, idPersonaje:any) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/guardadoPersonajes',
      {
        idUsuario: idUsuario,
        idPersonaje: idPersonaje,
      },
      {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async deleteGuardadoPersonaje(tok: any, idPersonaje: any, idUsuario: any) {
    return await new Promise<any>(resolve => {
      this.http.delete(this.apiUrl + '/eliminarGPersonaje/'+idPersonaje+'.'+idUsuario, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getMeGustaTotalesPelicula(tok: any, idPelicula:any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/meGustaPelicula/'+idPelicula, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async crearMeGustaPelicula(tok:any, idUsuario:any, idPelicula:any) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/meGustaPeliculas',
      {
        idUsuario: idUsuario,
        idPelicula: idPelicula,
      },
      {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
   
  async deleteMeGustaPelicula(tok: any, idPelicula: any, idUsuario: any) {
    return await new Promise<any>(resolve => {
      this.http.delete(this.apiUrl + '/eliminarMPeli/'+idPelicula+'.'+idUsuario, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getGuardadosTotalesPelicula(tok: any, idPelicula:any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/guardadoPelicula/'+idPelicula, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async crearGuardadoPelicula(tok:any, idUsuario:any, idPelicula:any) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/guardadoPeliculas',
      {
        idUsuario: idUsuario,
        idPelicula: idPelicula,
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async deleteGuardadoPelicula(tok: any, idPelicula: any, idUsuario: any) {
    return await new Promise<any>(resolve => {
      this.http.delete(this.apiUrl + '/eliminarGPelicula/'+idPelicula+'.'+idUsuario, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getPersonajesGuardados(tok: any, idUsuario:any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/personajesAsociados/'+idUsuario, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getPeliculasGuardadas(tok: any, idUsuario:any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/peliculasAsociadas/'+idUsuario, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  cerrarSesion(){
    this.token = null;
  }

  async getFilm(tok: any, id:any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/peliculas/'+id, {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async updateFilm(tok:any, PeliId:any,nombre:any, descripcion:any, imagen:any, idSaga:any, estreno:any) {
    return await new Promise<any>(resolve => {
      this.http.put(this.apiUrl + '/peliculas/'+PeliId,
      {
        nombre: nombre,
        sipnosis: descripcion,
        imagen: imagen,
        idSaga: idSaga,
        estreno: estreno
      },
      {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async UpdateCharacter(tok:any, idPersonaje:any, nombre:any, descripcion:any, imagen:any, idSaga:any) {
    return await new Promise<any>(resolve => {
      this.http.put(this.apiUrl + '/personajes/'+idPersonaje,
      {
        nombre: nombre,
        descripcion: descripcion,
        imagen: imagen,
        idSaga: idSaga
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async updateSaga(tok:any,idSaga:any, nombre:any, estreno:any) {
    return await new Promise<any>(resolve => {
      this.http.put(this.apiUrl + '/sagas/'+idSaga,
      {
        nombre: nombre,
        estreno: estreno,
      },
      {
         headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}

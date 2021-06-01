import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = 'http://marvelfilms.allsites.es/public/api';
  token: any;
  constructor(private http: HttpClient) { }


  login(email:any, password:any) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/login',
      {
        email: email,
        password: password
      })
        .subscribe(data => {
          this.token = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getCharacters(tok?: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/personajes', {
        // headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getFilms(tok?: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/peliculas', {
        // headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async createCharacter(nombre:any, descripcion:any, imagen:any, idSaga:any) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/personajes',
      {
        nombre: nombre,
        descripcion: descripcion,
        imagen: imagen,
        idSaga: idSaga
      },
      {
        // headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async createFilm(nombre:any, descripcion:any, imagen:any, idSaga:any, estreno:any) {
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
        // headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async createSaga(nombre:any, estreno:any) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/sagas',
      {
        nombre: nombre,
        estreno: estreno,
      },
      {
        // headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok)
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  async getSaga(tok?: any, id?:any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/sagas/'+id, {
        // headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getSagas(tok?: any) {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/sagas', {
        // headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async deleteSaga(tok?: any, id?: any) {
    return await new Promise<any>(resolve => {
      this.http.delete(this.apiUrl + '/sagas/'+id, {
        // headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async deleteFilm(tok?: any, id?: any) {
    return await new Promise<any>(resolve => {
      this.http.delete(this.apiUrl + '/peliculas/'+id, {
        // headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async deleteCharacter(tok?: any, id?: any) {
    return await new Promise<any>(resolve => {
      this.http.delete(this.apiUrl + '/personajes/'+id, {
        // headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
}

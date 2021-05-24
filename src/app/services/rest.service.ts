import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = 'https://allsites.es/api/public/api';
  token: any;
  constructor(private http: HttpClient) { }


  login(email: any, password: any) {
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

  getCharacters(tok: any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/personajes', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
}

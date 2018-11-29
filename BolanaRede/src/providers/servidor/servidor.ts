import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { map } from 'rxjs/operators';

/*
  Generated class for the ServidorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServidorProvider {

  url: string = 'http://localhost/bolanarede/';

  constructor(public http: Http) {
    console.log('Hello ServidorProvider Provider');
  }

  urlGet() {
    return this.url;
  }

  getPegar() {
    return this.http.get(this.url + 'listaTipoFalta.php').pipe(map(res => res.json()));
  }

  postData(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded'});
    return this.http.post(this.api + "apiCadastro.php", parans, {
      headers:headers,
      method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
  }

}

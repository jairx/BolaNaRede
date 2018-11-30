import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { getScrollData } from 'ionic-angular/umd/components/input/input';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServidorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServidorProvider {

  url: string = 'http://localhost/bolanarede/';
  api: string = 'http://localhost/bolanarede/';

  constructor(public http: Http) {

  }

  getTimes() {
    return this.http.get(this.api+'apiRecupera.php').map(res => res.json());
  }

  getData() {
    return this.http.get(this.url+'listaSelecoes.php').map(res=>res.json());
  }

  urlGet() {
    return this.url;
  }

  getCampeonatos() {
    return this.http.get(this.url+'listaCampeonatos.php').map(res=>res.json());
  }

  getPegar() {
    return this.http.get(this.url + 'listaTipoFalta.php').pipe(map(res => res.json()));
  }

  getCampeonatoJogosRealizados(idCampeonato) {
    return this.http.get(this.url+'campeonatoJogosRealizados.php?idCampeonato='+idCampeonato+'').pipe(map(res=>res.json()));
  }

  getCampeonatoJogosNaoRealizados(idCampeonato) {
    return this.http.get(this.url+'campeonatoJogosNaoRealizados.php?idCampeonato='+idCampeonato+'').pipe(map(res=>res.json()));
  }

  getCampeonatoDetalhes(idCampeonato) {
    return this.http.get(this.url+'campeonatoDetalhes.php?idCampeonato='+idCampeonato+'').pipe(map(res=>res.json()));
  }

  getSelecaoDetalhes(idSelecao) {
    return this.http.get(this.url+'timeDetalhes.php?idSelecao='+idSelecao+'').pipe(map(res=>res.json()));
  }

}

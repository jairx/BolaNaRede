import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

/**
 * Generated class for the CampeonatoDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-campeonato-detalhes',
  templateUrl: 'campeonato-detalhes.html',
})
export class CampeonatoDetalhesPage {

  jogosRealizados: any;
  jogosNaoRealizados: any;
  campeonato: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public servidor: ServidorProvider) {
                  this.getJogosRealizados();
                  this.getJogosNaoRealizados();
                  this.getCampeonato();
  }

  getCampeonato() {
    this.servidor.getCampeonatoDetalhes(this.campeonato.idCampeonato).subscribe(
      data => this.campeonato = data,
      err => console.log(err)
    )
  }

  getJogosRealizados() {
    this.servidor.getCampeonatoJogosRealizados(this.campeonato.idCampeonato).subscribe(
      data => this.jogosRealizados = data,
      err => console.log(err)
    )
  }

  getJogosNaoRealizados() {
    this.servidor.getCampeonatoJogosNaoRealizados(this.campeonato.idCampeonato).subscribe(
      data => this.jogosNaoRealizados = data,
      err => console.log(err)
    )
  }

}

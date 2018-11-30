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

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public servidor: ServidorProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampeonatoDetalhesPage');
  }

}

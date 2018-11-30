import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

/**
 * Generated class for the CampeonatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-campeonatos',
  templateUrl: 'campeonatos.html',
})
export class CampeonatosPage {

  campeonatos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public servidor: ServidorProvider) {
                  this.getDados();
  }

  onNew() : void {
    this.navCtrl.push('NovocampeonatoPage');
  }

  getDados() {
    this.servidor.getCampeonatos().subscribe(
      data => this.campeonatos = data,
      err => console.log(err)
    )
  }

}

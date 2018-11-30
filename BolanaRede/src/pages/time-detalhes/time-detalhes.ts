import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';

/**
 * Generated class for the TimeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-detalhes',
  templateUrl: 'time-detalhes.html',
})
export class TimeDetalhesPage {

  time: any;
  id: number;
  nome: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public servidor: ServidorProvider) {
                  this.getTimeDetalhes();
                  this.navParams.get('thing1');
  }

  getTimeDetalhes() {

    this.servidor.getSelecaoDetalhes(this.id).subscribe(
      data => this.time = data,
      err => console.log(err)
    )

  }

}

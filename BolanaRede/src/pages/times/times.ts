import { ServidorProvider } from './../../providers/servidor/servidor';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-times',
  templateUrl: 'times.html',
})
export class TimesPage {

  times: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public servidor: ServidorProvider) {
                  this.getDados();
  }

  onNovo() : void {
    this.navCtrl.push('CadastrotimesPage');
  }

  getDados(){
    this.servidor.getData().subscribe(
      data => this.times = data,
      err => console.log(err)
    )
  }

}

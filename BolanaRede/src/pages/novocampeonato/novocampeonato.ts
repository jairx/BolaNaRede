import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

/**
 * Generated class for the NovocampeonatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novocampeonato',
  templateUrl: 'novocampeonato.html',
})
export class NovocampeonatoPage {

  nomeCampeonato: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, public servidor: ServidorProvider, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovocampeonatoPage');
  }

}

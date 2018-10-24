import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onTimes() : void {
    this.navCtrl.push('TimesPage');
  }

  onCampeonato() : void {
    this.navCtrl.push('CampeonatosPage');
  }

  onJogos() : void {
    this.navCtrl.push('JogosPage');
  }
}

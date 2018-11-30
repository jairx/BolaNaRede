import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampeonatoDetalhesPage } from './campeonato-detalhes';

@NgModule({
  declarations: [
    CampeonatoDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(CampeonatoDetalhesPage),
  ],
})
export class CampeonatoDetalhesPageModule {}

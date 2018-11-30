import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeDetalhesPage } from './time-detalhes';

@NgModule({
  declarations: [
    TimeDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeDetalhesPage),
  ],
})
export class TimeDetalhesPageModule {}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  Def() {
    this.navCtrl.navigateForward('definicao');
  }

  ComoUsar() {
    this.navCtrl.navigateForward('como-usar');
  }

  Usar() {
    this.navCtrl.navigateForward('iniciar');
  }

  Ref() {
    this.navCtrl.navigateForward('ref');
  }
// tslint:disable-next-line: eofline
}
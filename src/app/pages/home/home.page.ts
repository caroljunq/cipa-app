import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController, private menuCtrl: MenuController) {}

  goToDefinition(){
      this.navCtrl.navigateForward('/definition');
  }

  goToInterventions(){
      this.navCtrl.navigateForward('/interventions');
  }

  goToDiagnostics(){
      this.navCtrl.navigateForward('/diagnostics');
  }

  goToRefs(){
      this.navCtrl.navigateForward('/ref');
  }

  openMenu(){
     this.menuCtrl.open();
  }
}

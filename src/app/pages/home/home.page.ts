import { Component } from '@angular/core';
<<<<<<< HEAD:src/app/pages/home/home.page.ts
import { Router } from '@angular/router';
=======
import { NavController } from '@ionic/angular';
>>>>>>> joao:src/app/home/home.page.ts

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

<<<<<<< HEAD:src/app/pages/home/home.page.ts
  goToDefinition(){
    this.router.navigate(['/definition']);
  }

  goToInterventions(){
    this.router.navigate(['/interventions']);
  }

  goToDiagnostics(){
    this.router.navigate(['/diagnostics']);
  }

  goToRefs(){
    this.router.navigate(['/ref']);
  }
}
=======
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
>>>>>>> joao:src/app/home/home.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router){}

  Def(){
    this.router.navigate(['/definition']);
  }

  HowToUse(){
    this.router.navigate(['/how-to-use']);
  }

  Usar(){
    this.router.navigate(['/about']);
  }

  Ref(){
    this.router.navigate(['/ref']);
  }
}
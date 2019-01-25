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
    this.router.navigate(['/definicao']);
  }

  ComoUsar(){
    this.router.navigate(['/como-usar']);
  }

  Usar(){
    this.router.navigate(['/iniciar']);
  }

  Ref(){
    this.router.navigate(['/ref']);
  }
}
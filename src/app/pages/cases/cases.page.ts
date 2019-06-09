import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.page.html',
  styleUrls: ['./cases.page.scss'],
})
export class CasesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }

  createCase(){
    this.navCtrl.navigateForward('/new-case');
  }

}

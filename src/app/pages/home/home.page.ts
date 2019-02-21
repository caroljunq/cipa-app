import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { ContentService } from '../../services/content/content.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private contentService: ContentService
  ) {}

  openMenu(){
     this.menuCtrl.open();
  }

  listInterventions(){
    this.contentService.setRenderContent('interventions', '');
    this.navCtrl.navigateForward('/generic-list-items');
  }
}

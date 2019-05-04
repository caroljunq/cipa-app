import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { ContentService } from '../../services/content/content.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private contentService: ContentService,
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  openMenu() {
     this.menuCtrl.open();
  }

  navigateCategory(category){
    this.contentService.setCategory(category);
    this.navCtrl.navigateForward('/select-group');
  }
  
}

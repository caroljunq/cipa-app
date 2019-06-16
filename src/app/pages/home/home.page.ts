import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { ContentService } from '../../services/content/content.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  firstAccess: boolean = true;
  selectedCase: any = {
    id: '',
    displayName: ''
  };
  
  constructor(
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private contentService: ContentService,
    private storage: Storage
  ) {
    this.storage.get('firstAccess').then((val) => {
      if(val == null || val){
        this.firstAccess = true;
      }else{
        this.firstAccess = false;
      }
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  ionViewWillEnter(){
    this.selectedCase = {
      id: '',
      displayName: ''
    };
    this.storage.get('dbIdCase').then((id) => {
      if(id != null && id != ''){
        this.selectedCase.id = id;
        this.selectedCase.displayName = id.split('_')[0]
      }
    })
  }

  openMenu() {
     this.menuCtrl.open();
  }

  navigateCategory(category){
    this.contentService.setCategory(category);
    this.navCtrl.navigateForward('/select-group');
  }

  startApp(){
    this.firstAccess = false;
    this.storage.set('firstAccess', false);
  } 
}

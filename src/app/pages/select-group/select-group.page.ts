import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContentService } from '../../services/content/content.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.page.html',
  styleUrls: ['./select-group.page.scss'],
})
export class SelectGroupPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private contentService: ContentService,
    private storage: Storage
  ) {}

  selectedCase: any = {
    id: '',
    displayName: ''
  };

  ngOnInit() {}

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

  selectGroup(group){
    this.contentService.setGroup(group);
    this.contentService.setData(group);
    this.navCtrl.navigateForward('/generic-list-items');
  }
}

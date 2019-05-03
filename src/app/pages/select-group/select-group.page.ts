import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContentService } from '../../services/content/content.service';

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.page.html',
  styleUrls: ['./select-group.page.scss'],
})
export class SelectGroupPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private contentService: ContentService
  ) {}

  ngOnInit() {}

  selectGroup(group){
    this.contentService.setGroup(group);
    this.contentService.setData(group);
    this.navCtrl.navigateForward('/generic-list-items');
  }
}

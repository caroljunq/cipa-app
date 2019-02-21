import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContentService } from '../../services/content/content.service';

@Component({
  selector: 'app-diag-select-group',
  templateUrl: './diag-select-group.page.html',
  styleUrls: ['./diag-select-group.page.scss'],
})
export class DiagSelectGroupPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private contentService: ContentService
  ) { }

  ngOnInit() {
  }

  listDiagnostics(group){
    this.contentService.setRenderContent('diagnostics', group);
    this.navCtrl.navigateForward('/generic-list-items');
  }

}

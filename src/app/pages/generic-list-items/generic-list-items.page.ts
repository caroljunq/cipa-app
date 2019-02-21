import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';


@Component({
  selector: 'app-generic-list-items',
  templateUrl: './generic-list-items.page.html',
  styleUrls: ['./generic-list-items.page.scss'],
})
export class GenericListItemsPage implements OnInit {

  pagesInfo: any  = {
    interventions: {
      options: ['Fortalecimento','Desgastes']
    },
    diagnostics: {
      options: ['Criança', "Família"]
    }
  }

  renderContent: any = {
    category: '',
    group: '',
    data: []
  };

  constructor(
    private contentService: ContentService,
  ) { }

  ngOnInit() {
    this.renderContent = this.contentService.getRenderContent();
  }
}

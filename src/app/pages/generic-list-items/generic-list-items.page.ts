import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';


@Component({
  selector: 'app-generic-list-items',
  templateUrl: './generic-list-items.page.html',
  styleUrls: ['./generic-list-items.page.scss'],
})
export class GenericListItemsPage implements OnInit {

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    console.log(this.contentService.getRenderContent());
  }

}

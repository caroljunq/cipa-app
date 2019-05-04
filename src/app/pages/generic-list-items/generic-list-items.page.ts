import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';

@Component({
  selector: 'app-generic-list-items',
  templateUrl: './generic-list-items.page.html',
  styleUrls: ['./generic-list-items.page.scss'],
})
export class GenericListItemsPage implements OnInit {

  select_type_values = ['fortalecimento','desgastes'];

  renderContent: any = {
    type: 'fortalecimento',
    category: '',
    group: '',
    data: []
  };

  dictionary = {
    type:{
      fortalecimento: 'Fortalecimento e Promoção',
      desgastes: 'Desgastes, Causas, Manifestações e Consequências'      
    },
    group: {
      crianca: 'Criança',
      familia: 'Família'
    },
    category:{
      intervencoes: 'Intervenções de Enfermagem',
      diagnosticos: 'Diagnósticos de Enfermagem'
    }
  }

   constructor(
    private contentService: ContentService,
  ) {  }

  ngOnInit() {
    this.renderContent = this.contentService.getRenderContent();
  }
}

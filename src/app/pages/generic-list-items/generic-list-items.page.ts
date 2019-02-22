import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';

@Component({
  selector: 'app-generic-list-items',
  templateUrl: './generic-list-items.page.html',
  styleUrls: ['./generic-list-items.page.scss'],
})
export class GenericListItemsPage implements OnInit {

  pageInfo: any  = {
    interventions: {
      title: 'Intervenções',
      select_label: 'Grupo',
      select_options: ['Fortalecimento','Desgastes'],
      select_values: ['fortalecimento','desgastes']
    },
    diagnostics: {
      title: 'Diagnóstico e Resultados',
      select_label: 'Relativos à',
      select_options: ['Criança', 'Família'],
      select_values: ['child','family']
    }
  }

  renderContent: any = {
    category: '',
    group: '',
    data: []
  };

  // render vars
  select_label: string;
  select_options: any = [];
  select_values: any = [];
  selected_option: any = [];
  subtitle: any = '';
  title: any = '';

  constructor(
    private contentService: ContentService,
  ) { }

  ngOnInit() {
    this.renderContent = this.contentService.getRenderContent();
    this.select_label = this.pageInfo[this.renderContent.category].select_label;

    this.select_options = this.pageInfo[this.renderContent.category].select_options;
    this.select_values = this.pageInfo[this.renderContent.category].select_values;
    this.selected_option = this.select_values[0];

    if(this.renderContent.group == 'fortalecimento'){
      this.subtitle = 'Fortalecimento e Proteção';
    }else if(this.renderContent.group == 'desgastes'){
      this.subtitle = 'Desgastes';
    }

    this.title = this.pageInfo[this.renderContent.category].title;
  }

}

import { Injectable } from '@angular/core';
import { diagnostics_list } from '../diagnostics-data';
import { interventions_list } from '../interventions-data';

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  renderContent: any = {
    category: '',
    group: '',
    data: []
  };

  constructor() {}

  // Diagnostics functions
  getDiagnostics(){
    return diagnostics_list;
  }

  getSpecificDiagnostics(group){
    return diagnostics_list.filter( el => {
      return el.group == group;
    })
  }

  // interventions functions
  getInterventions(){
    return interventions_list;
  }

  setRenderContent(category, group){
    this.renderContent = {
      category: category,
      group: group
    }

    if(group != ''){
      this.renderContent.data = this.getSpecificDiagnostics(group)
    } else{
      this.renderContent.data = this.getInterventions();
    }
  }

  getRenderContent(){
    return this.renderContent;
  }
}

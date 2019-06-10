import { Injectable } from '@angular/core';
import { diagnostics_list } from '../diagnostics-data';
import { interventions_list } from '../interventions-data';
import { Case } from './../../services/models/case';

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  renderContent: any = {
    type: 'fortalecimento',
    group: '',
    category: '',
    data: [],
    case: {
      db_id: '',
      id: '',
      gender: '',
      dob: '',
      notes: '',
      created: '',
      favorites: []
    },
  };

  constructor() {}

  setType(type: string){
    this.renderContent.type = type;
  }

  setGroup(group: string){
    this.renderContent.group = group;
  }

  setCategory(category: string){
    this.renderContent.category = category;
  }

  getSpecificDiagnostics(group: string){
    return diagnostics_list.filter( el => {
      return el.group == group;
    })
  }

  getSpecificInterventions(group: string){
    return interventions_list.filter( el => {
      return el.group == group;
    })
  }

  setData(group: string){
    if(this.renderContent.category == 'diagnosticos' ){
      this.renderContent.data = this.getSpecificDiagnostics(group)
    } else{
      this.renderContent.data = this.getSpecificInterventions(group);
    }
  }

  getRenderContent(){
    return this.renderContent;
  }

  setRenderCase(curCase: Case){
    this.renderContent.case = curCase;
  }

  resetRenderContent(){
    this.renderContent = {
      type: 'fortalecimento',
      group: '',
      category: '',
      data: [],
      case: {
        db_id: '',
        id: '',
        gender: '',
        dob: '',
        notes: '',
        created: '',
        favorites: []
      },
    };
  }
}

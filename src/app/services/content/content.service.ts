import { Injectable } from '@angular/core';
import { diagnostics_list } from '../diagnostics-data';
import { interventions_list } from '../interventions-data';

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
      gender: 'Feminino',
      dob: '',
      notes: '',
      created: '',
      favorites: []
    },
  };

  constructor() {}

  setType(type){
    this.renderContent.type = type;
  }

  setGroup(group){
    this.renderContent.group = group;
  }

  setCategory(category){
    this.renderContent.category = category;
  }

  getSpecificDiagnostics(group){
    return diagnostics_list.filter( el => {
      return el.group == group;
    })
  }

  getSpecificInterventions(group){
    return interventions_list.filter( el => {
      return el.group == group;
    })
  }

  setData(group){
    if(this.renderContent.category == 'diagnosticos' ){
      this.renderContent.data = this.getSpecificDiagnostics(group)
    } else{
      this.renderContent.data = this.getSpecificInterventions(group);
    }
  }

  getRenderContent(){
    return this.renderContent;
  }

  setRenderCase(curCase,case_id){
    this.renderContent.case = curCase;
    this.renderContent.case.db_id = case_id;
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
        gender: 'Feminino',
        dob: '',
        notes: '',
        created: '',
        favorites: []
      },
    };
  }
}

import { Injectable } from '@angular/core';
import { diagnostics_list } from '../diagnostics-data';
import { interventions_list } from '../interventions-data';
import { Case } from './../../services/models/case';
import { Storage } from '@ionic/storage';
import { state_list } from '../../services/cities/Estados';
import {  citiesOfAC, citiesOfAL, citiesOfAM, citiesOfAP, citiesOfBA, citiesOfCE,
  citiesOfDF, citiesOfES, citiesOfGO, citiesOfMA, citiesOfMG, citiesOfMS, 
  citiesOfMT, citiesOfPA, citiesOfPB, citiesOfPE, citiesOfPI, citiesOfPR,
  citiesOfRJ, citiesOfRN, citiesOfRO, citiesOfRR, citiesOfRS, citiesOfSC,
  citiesOfTO, citiesOfSE, citiesOfSP } from './../../services/cities/cities';

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

  listaDeEstados = state_list;
  listaDeCidades = [  , citiesOfAC, citiesOfAL, citiesOfAM, citiesOfAP, citiesOfBA, citiesOfCE,
                        citiesOfDF, citiesOfES, citiesOfGO, citiesOfMA, citiesOfMG, citiesOfMS, 
                        citiesOfMT, citiesOfPA, citiesOfPB, citiesOfPE, citiesOfPI, citiesOfPR,
                        citiesOfRJ, citiesOfRN, citiesOfRO, citiesOfRR, citiesOfRS, citiesOfSC,
                        citiesOfSE, citiesOfSP, citiesOfTO ];

  constructor(private storage: Storage) {}

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

  setSelectedCase(db_id: string){
    return this.storage.set('dbIdCase', db_id);
  }

  removeSelectedCase(){
    this.storage.set('dbIdCase', '');
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

  getCitiesState(state){
    return this.listaDeCidades[state.id];
  }

  getStates(){
    return this.listaDeEstados;
  }
}

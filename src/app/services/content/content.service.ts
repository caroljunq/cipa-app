import { Injectable } from '@angular/core';
import { diagnostics_list } from '../diagnostics-data';
import { interventions_list } from '../interventions-data';


@Injectable({
  providedIn: 'root'
})

export class ContentService {

  constructor() {}

  // Diagnostics functions
  getDiagnostics(){
    return diagnostics_list;
  }

  getSpecificDiagnostics(type, group){
    return diagnostics_list.filter( el => {
      return el.type == type && el.type == group;
    })
  }

  // interventions functions
  getIntervations(){
    return interventions_list;
  }

}

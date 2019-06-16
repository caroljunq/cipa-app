import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLocations'
})

export class SearchLocationsPipe implements PipeTransform {

  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;

    if(terms){
      terms = terms.toLowerCase();
      return items.filter( it => {
        return it.nome.toLowerCase().includes(terms);
      });
    }
  }
}

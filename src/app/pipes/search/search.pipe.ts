import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;

    if(terms){
      terms = terms.toLowerCase();
      return items.filter( it => {
        return it.text.toLowerCase().includes(terms);
      });
    }
  }
}

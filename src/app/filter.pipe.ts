import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string): any {
    if ( search === '' || search === undefined || search === null ) {
      return value ;
    }
    return value.filter(cherche => cherche.name.includes(search));
  }

}

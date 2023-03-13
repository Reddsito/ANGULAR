import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interface';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(heroes: Heroe[], orderFor: string = 'whitout value'): Heroe[] {
    switch (orderFor) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));

      case 'value':
        return heroes.sort((a, b) => (a.fly > b.fly ? -1 : 1));

      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));

      default:
        return heroes;
    }

  }
}

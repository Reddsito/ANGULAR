import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Thor'];
  heroeDeleted: string = '';

  deleteHeroe(): void {
     this.heroeDeleted =  this.heroes.shift() || '';
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent {

  nameLower: string = 'enriQUe';
  nameUpper: string = 'ENRiquE';
  nameComplete: string = 'ENRIQUe QuErInI';

  date: Date = new Date();
}

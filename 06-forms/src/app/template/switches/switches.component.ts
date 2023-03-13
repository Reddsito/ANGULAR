import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',

})
export class SwitchesComponent {

  person = {
    gender: 'F',
    notification: true,
  }

  termsAndContidion = false;

}

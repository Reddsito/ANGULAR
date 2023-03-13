import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
})
export class NoCommonsComponent {

  // i18nSelect
  name: string = 'Enrique';
  gender: string = 'male';


  invitationMap = {
    'male': 'Mr',
    'female': 'Mrs'
  }

  // i18nPlural
  clients: string[] = ['Ana', 'Marcos','Juan','Marcos','Lucas'];

  clientsMap = {
    '=0': 'we dont have any client waiting.',
    '=1': 'we have a client waiting ',
    'other': 'we have # clients waiting'
  }

  //KeyValue
  person = {
    name: 'Enrique',
    age: 20,
    address: 'Panama, Arraiján'

  }

  myObservable = interval(1000);


  changeGender(){

    this.name = this.name == 'Enrique' ? 'Fernanda' : 'Enrique';

    this.gender = this.gender == 'male' ? 'female' : 'male'

  }

  deleteClient(){
    this.clients.pop();
  }



}

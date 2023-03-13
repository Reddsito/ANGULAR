import { Component, Input } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  constructor(private readonly dbzService: DbzService) {}

  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add(e: Event) {
    if (this.newCharacter.name.trim().length === 0) return;

    // this.onNewCharacter.emit( this.newCharacter )

    this.dbzService.addCharacter(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}

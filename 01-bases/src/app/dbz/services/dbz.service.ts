import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{

  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 1400
    },
    {
      name: 'Vegetta',
      power: 1300
    },

  ]

  get characters(): Character[] {
    return [ ...this._characters ];
  }

  addCharacter( character: Character ) {
    this._characters.push({ ...character })
  }

}

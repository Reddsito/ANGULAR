import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',

})
export class DynamicsComponent {

  person: Person = {
    name: 'Enrique',
    favorites: [
      {
        id: 1, name: 'Metal gear'
      },
      {
        id: 2, name: 'Gray'
      }
    ]
  }

  newGame: string = '';

  @ViewChild('dynamicForm') dynamicForm! :NgForm;

  save() {
    console.log(this.dynamicForm)
  }

  delete( index: number ) {
    this.person.favorites.splice(index, 1)
  }

  addGame() {
    const gameFavorite: Favorite = {
      id:  this.person.favorites.length + 1,
      name: this.newGame
    }

    this.person.favorites.push( { ...gameFavorite } )
    this.newGame = '';
  }

}

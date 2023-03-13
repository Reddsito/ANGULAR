import { Component } from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
  name: string = 'Ironman';
  age: number = 45;

  get nameCapitalized(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }

}

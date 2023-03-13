import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `

    <h1>{{ title }}</h1>
    <h3>La base es <strong>{{ base }}</strong></h3>

    <button (click)="acumular(+base)"> +{{ base }}</button>

    <span>{{ numbers }}</span>

    <button (click)="acumular(-base)" > -{{ base }}</button>

  `
})
export class CounterComponent {
  public title: string = 'Contador App';
  public numbers: number = 0;
  public base: number = 5;

  acumular( valor: number ) {
    this.numbers += valor;
  }
}

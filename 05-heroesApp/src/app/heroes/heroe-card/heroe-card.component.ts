import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { Heroe } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [
    `
    .flex-layout{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      grid-gap: 12px;
      justify-content: center;
      margin: 0px 20px;
    }

    `
  ]
})
export class HeroeCardComponent implements OnInit  {

  heroes: Heroe[] = [];

  constructor(
    private readonly heroesService: HeroesService
  )
  {}

  ngOnInit(): void {

    this.heroesService.getHeroes()
    .subscribe( heroes => this.heroes = heroes
    )

  }
}

import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  term: string = '';
  heroes: Heroe[] = [];
  heroeSelected!: Heroe | undefined;

  constructor(private readonly heroesService: HeroesService) {}

  search() {


    this.heroesService.getSuggestion( this.term.trim() ).subscribe((heroes) => {
      this.heroes = heroes;
    });

  }

  optionSelected( event: MatAutocompleteSelectedEvent ) {

    console.log(event)

    if(event.option.value === undefined){
      this.heroeSelected = undefined;
      this.term = '';
      return;
    }

    const heroe: Heroe = event.option.value;
    this.term = heroe.superhero;

    this.heroesService
      .getHeroesById(heroe.id!)
      .subscribe((heroe) => (this.heroeSelected = heroe));
  }

}

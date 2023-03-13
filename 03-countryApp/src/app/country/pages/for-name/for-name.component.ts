import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-for-name',
  templateUrl: './for-name.component.html',
  styles: [
    `
    li{
      cursor: pointer
    }
    `
  ]
})
export class ForNameComponent {

  term: string = ''
  isMistake: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];

  constructor(
    private readonly countryService: CountryService
  )
  {}

  search( term: string ){

      this.term = term;
      this.isMistake = false;

      of( this.countryService.searchCountry( this.term ).subscribe({

        next: (resp) =>  {
          this.countries = resp
          console.log( resp )
        },
        error: error => {
          this.isMistake = true;
          this.countries = [];
          console.log( error );
        }
      }) )

  }

  suggestions( term: string ) {
    this.isMistake = false;
    this.term = term;

    if( term.trim().length === 0 )
      this.suggestedCountries = [];

      of( this.countryService.searchCountry( term )
      .subscribe({
        next: (countries) => {
          this.suggestedCountries = countries.splice(0,3)
        },

        error: err => this.suggestedCountries = []
      })

      )


  }


}

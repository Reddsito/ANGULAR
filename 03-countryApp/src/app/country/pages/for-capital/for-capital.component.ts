import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
})
export class ForCapitalComponent {

  term: string = '';
  isMistake: boolean = false;
  countries: Country[] = [];

  constructor(
    private readonly countryService: CountryService
  ){}

  search( term: string ){

    this.term = term;
    this.isMistake = false;

    of( this.countryService.searchCapital( this.term ).subscribe({

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
    //TODO: Crear sugerencias
  }


}

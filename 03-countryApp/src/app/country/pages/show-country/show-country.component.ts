import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { count, switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
})
export class ShowCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly countryService: CountryService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countryService.searchCountryByCode( id ) ),
      tap( console.log )
    )
    .subscribe( country => this.country = country[0]
    )

  //   this.activatedRoute.params
  //   .subscribe( ({ id }) => {

  //     this.countryService.searchCountryByCode( id )
  //     .subscribe( country => {
  //       console.log( country )
  //     } )

  //   } )

  // }

  }

}

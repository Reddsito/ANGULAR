import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
})
export class ForRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']

  regionActive: string = '';
  countries: Country[] = [];

  constructor(
    private readonly countryService: CountryService
  ){}

  activeRegion( region: string ) {

    if( region === this.regionActive ) return;

    this.regionActive = region;
    this.countries = [];

    this.search( region );

  }

  getClassesCss( region: string ){
    return ( region === this.regionActive ) ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1'
  }

  search( region: string ) {
    this.countryService.searchCountryByRegion( region )
    .subscribe( countries => this.countries = countries)
  }




}

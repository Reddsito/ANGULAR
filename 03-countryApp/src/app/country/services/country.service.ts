import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Country } from '../interfaces/country.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  get httpParams(){
    return new HttpParams()
    .set( 'fields','name,capital,flags,population,cca2' )
  }

  constructor(
    private readonly http: HttpClient
  ) { }

    searchCountry( term: string ): Observable<Country[]>  {

      const url = `${ this.apiUrl }/name/${ term }`
      return this.http.get<Country[]>( url, { params: this.httpParams } );

    }

    searchCapital( term: string ): Observable<Country[]>{

      const url = `${ this.apiUrl }/capital/${ term }`;
      return this.http.get<Country[]>( url, { params: this.httpParams });
    }

    searchCountryByCode( id: string ): Observable<Country[]>{

      const url = `${ this.apiUrl }/alpha/${ id }`;
      return this.http.get<Country[]>( url );

    }

    searchCountryByRegion( region: string ){
      const url = `${ this.apiUrl }/region/${ region }`;


      return this.http.get<Country[]>( url, { params: this.httpParams } )

    }



}

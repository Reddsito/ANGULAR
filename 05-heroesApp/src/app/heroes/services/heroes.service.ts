import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private readonly http: HttpClient
  ) { }



  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>( `${this.baseUrl}/heroes` )
  }

  getHeroesById( id:string ): Observable<Heroe> {
    return this.http.get<Heroe>( `${ this.baseUrl }/heroes/${ id }` )
  }

  getSuggestion( term: string ): Observable<Heroe[]> {
    return this.http.get<Heroe[]>( `${ this.baseUrl }/heroes/?q=${ term }&_limit=5`)
  }

  addHeroes( heroe: Heroe ): Observable<Heroe> {
    return this.http.post<Heroe>( `${this.baseUrl}/heroes`, heroe )
  }

  updateHeroes( heroe: Heroe ): Observable<Heroe> {
    return this.http.put<Heroe>( `${this.baseUrl}/heroes/${ heroe.id }`, heroe )
  }

  deleteHeroes( id: string ): Observable<any> {
    return this.http.delete<any>( `${this.baseUrl}/heroes/${ id }` )
  }



}

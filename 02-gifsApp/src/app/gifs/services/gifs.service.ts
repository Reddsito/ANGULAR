import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsReponse, Gif } from '../../interface/gifs.interface';

@Injectable({
  //Hace que el servicio sea global
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'FL6QgErCzLqE2BgFRtkwr3D9aYLQlktE';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  private _history: string[] = [];

  get history(){
    return [ ...this._history ];
  }


   public responses: Gif[] = []

  constructor(
    private readonly http: HttpClient
  )
  {
    this._history = JSON.parse( localStorage.getItem('history')!) || [];

    this.responses = JSON.parse( localStorage.getItem('responses')!) || [];

  }

  searchGifs( query: string ){

    query = query.trim().toLowerCase();

    if( this._history.includes( query ) ) {
      const newHistory = this._history.filter( (search) => search !== query )

      this._history = newHistory;
    }

    this._history.unshift( query );
    this._history = this._history.splice(0, 10);

    localStorage.setItem('history', JSON.stringify(  this._history ) )

    const params = new HttpParams()
    .set('apiKey', this.apiKey)
    .set('limit', 10)
    .set('q', query)

    this.http.get<SearchGifsReponse>(`${ this.serviceUrl }/search`, { params }).subscribe( (resp) => {

      this.responses = resp.data

      localStorage.setItem('responses', JSON.stringify( this.responses ))
    })

  }

}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly gifsService: GifsService
  ){}

  search(){

    const searchValue = this.txtSearch.nativeElement.value

    if( searchValue.trim().length === 0 ) return;

    this.gifsService.searchGifs( searchValue )

    this.txtSearch.nativeElement.value  = '';
  }

}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get history() {
    return this.gifsService.history
  }

  constructor(
    private readonly gifsService: GifsService
  ){}



  search( query: string ){

    this.gifsService.searchGifs( query )

  }

}

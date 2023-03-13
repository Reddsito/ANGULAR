import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
})
export class ShowResultsComponent {

  get responses() {
    return this.gifsService.responses;
  }

  constructor(
    private readonly gifsService: GifsService
  )
  {}

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ShowResultsComponent } from './show-results/show-results.component';
import { GifsService } from './services/gifs.service';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ShowResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent,
  ],
  providers: [
    GifsService
  ]
})
export class GifsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { ForNameComponent } from './pages/for-name/for-name.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { RouterModule } from '@angular/router';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { TableComponent } from './components/table/table.component';




@NgModule({
  declarations: [
    ForCapitalComponent,
    ForRegionComponent,
    ForNameComponent,
    ShowCountryComponent,
    TableComponent,
    CountryInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ForCapitalComponent,
    ForNameComponent,
    ForRegionComponent,
    ShowCountryComponent,

  ]
})
export class CountryModule { }

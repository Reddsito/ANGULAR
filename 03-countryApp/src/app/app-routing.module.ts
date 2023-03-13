import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { ForNameComponent } from './country/pages/for-name/for-name.component';
import { ForRegionComponent } from './country/pages/for-region/for-region.component';
import { ForCapitalComponent } from './country/pages/for-capital/for-capital.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';

const routes: Routes = [

  {
    path: '',
    component: ForNameComponent,
    pathMatch: 'full'
  },

  {
    path: 'region',
    component: ForRegionComponent

  },
  {
    path: 'capital',
    component: ForCapitalComponent
  },
  {
    path: 'country/:id',
    component: ShowCountryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { ShowComponent } from './pages/show/show.component';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './heroe-card/heroe-card.component';
import { ImagePipe } from './pipes/image.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    ShowComponent,
    ListComponent,
    HomeComponent,
    HeroeComponent,
    HeroeCardComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule

  ]
})
export class HeroesModule { }

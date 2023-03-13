import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
    img {
      width: 100%;
      border-radius: 5px;
    }
    `
  ]
})
export class AddComponent implements OnInit {

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  constructor(
    private readonly heroesService: HeroesService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ){}

  ngOnInit(): void {

      if ( !this.router.url.includes('edit') ) {
        return;
      }

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroesById( id ) )
    )
    .subscribe( heroe => this.heroe = heroe )

  }

  save() {
    if( this.heroe.superhero.trim().length === 0 ) return;

    if ( this.heroe.id ){

      this.heroesService.updateHeroes( this.heroe )
      .subscribe( heroe => this.router.navigate(['/heroes', heroe.id]))
      return;
    }

    this.heroesService.addHeroes( this.heroe )
    .subscribe( heroe => {
      this.router.navigate(['/heroes/edit', heroe.id]);
    } )

  }

  delete() {
    this.heroesService.deleteHeroes( this.heroe.id! )
      .subscribe( resp => {
        this.router.navigate(['/heroes'])
      } )
  }



}

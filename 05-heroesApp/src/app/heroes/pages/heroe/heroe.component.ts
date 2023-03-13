import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    .flex-layout{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      grid-gap: 12px;
      justify-content: center;
      margin: 0px 20px;
      background-color: red;
    }

    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private readonly activatedRouted: ActivatedRoute,
    private readonly heroesService: HeroesService,
    private router: Router
  ){}

  ngOnInit(): void {

    this.activatedRouted.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroesById( id ))
    )
    .subscribe( heroe => this.heroe = heroe);

  }

  back(): void {
    this.router.navigate(['/heroes/list'])
  }


}

import { Component, OnInit, Input } from '@angular/core';
import {HeroService, Hero} from 'src/app/service/hero.service'
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroes-results',
  templateUrl: './heroes-results.component.html',
  styleUrls: ['./heroes-results.component.css']
})
export class HeroesResultsComponent implements OnInit {
  heroes: Hero[];
  constructor(
    private getHeroes: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.heroes = this.getHeroes.buscarHeroe(
      this.route.snapshot.paramMap.get('palabra')
    );
  }

}

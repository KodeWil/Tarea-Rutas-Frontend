import { Component, OnInit, Input } from '@angular/core';
import {HeroService, Hero} from 'src/app/service/hero.service'
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-heroes-results',
  templateUrl: './heroes-results.component.html',
  styleUrls: ['./heroes-results.component.css']
})
export class HeroesResultsComponent implements OnInit {

  heroes: Hero[];
  constructor(
    private getHeroes: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.heroes = this.getHeroes.buscarHeroe(params['resultado'])
    }

    )
  }


}

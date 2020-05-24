import { Component, OnInit } from '@angular/core';
import { HeroService,Hero } from '../../service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {

  villain:Hero[]=[];
  constructor( private _heroService: HeroService, private _router: Router) { 

  }

  ngOnInit(): void {
    this.villain = this._heroService.getVillains();
    console.log(this.villain);
  }

}

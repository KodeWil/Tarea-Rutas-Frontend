import { Component, OnInit } from '@angular/core';
import { HeroService ,Hero  } from '../../service/hero.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-villain-details',
  templateUrl: './villain-details.component.html',
  styleUrls: ['./villain-details.component.css']
})
export class VillainDetailsComponent implements OnInit {

  villain:any = [];
  constructor(private _activeRoute: ActivatedRoute, private _heroService:HeroService) 
  { 
    this._activeRoute.params.subscribe( params=>{
      //console.log(params['id']);
      this.villain = this._heroService.getVillain(params['id']);
    })
   }
  

  
  ngOnInit(): void {
  }

}

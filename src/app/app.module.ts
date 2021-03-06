import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

// RUTAS

import { APP_ROUTING } from './app.routes';


// SERVICIOS

import { HeroService } from './service/hero.service';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroesResultsComponent } from './components/heroes-results/heroes-results.component';
import { RouterModule, Routes } from '@angular/router';
import { VillainsComponent } from './components/villains/villains.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroDetailsComponent,
    HeroesResultsComponent,
    VillainsComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroService
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

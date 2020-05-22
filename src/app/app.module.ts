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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroDetailsComponent,
    HeroesResultsComponent    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

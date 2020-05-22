import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroesResultsComponent } from './components/heroes-results/heroes-results.component';


const APP_ROUTE: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'results/:palabra', component: HeroesResultsComponent },
    { path: 'detalles/:id', component:  HeroDetailsComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);

import { Routes } from '@angular/router';
import { ComprasMainComponent } from './compras-main/compras-main.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'beers', component: ComprasMainComponent },
    { path: 'about', component: BreweryAboutComponent }
];
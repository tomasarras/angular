import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BeerCartComponent } from './beer-cart/beer-cart.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { ComprasMainComponent } from './compras-main/compras-main.component';
import { BeerDataService } from './beer-data.service';
import { HttpClientModule } from "@angular/common/http";
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    BeerCartComponent,
    BeerListComponent,
    BreweryAboutComponent,
    ComprasMainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ BeerDataService,
  HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }

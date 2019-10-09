import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerCartComponent } from './beer-cart/beer-cart.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BeerListComponent,
    BeerCartComponent,
    AppFooterComponent,
    BreweryAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

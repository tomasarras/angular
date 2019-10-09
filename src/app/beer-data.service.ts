import { Injectable } from '@angular/core';

//import { BEERS } from './beer-cart/mocks';
import { Beer } from './beer-cart/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {


  getBeers(){
    return Beer;
  }
}

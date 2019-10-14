import { Injectable } from '@angular/core';
//import { BEERS } from './beer-list/mocks';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  public beers: any = null;

  getBeers() {
    const url = 'https://angular-14451.firebaseio.com/beers.json';
    return this.http.get(url);
  }

}

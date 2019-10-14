import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brewery-about',
  templateUrl: './brewery-about.component.html',
  styleUrls: ['./brewery-about.component.scss']
})
export class BreweryAboutComponent implements OnInit {

  public titulos: object = {
    nombre: "Tomas",
    direccion: "123",
    email: "email@gmail.com"
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BEERS } from './mocks';

@Component({
  selector: 'app-beer-cart',
  templateUrl: './beer-cart.component.html',
  styleUrls: ['./beer-cart.component.scss']
})
export class BeerCartComponent implements OnInit {

  public titulos: any = {
    name : 'Nombre',
    description : "Descripcion",
    stock: "Stock",
    precio : "Precio",
    imagen : "Imagen",
    cantidad: "Cantidad",
    oferta : "Oferta"
  }

  masCerveza(cerveza){
    cerveza.name = "Se cambio el nombre";
  }

  public cervezas: Beer[];

  public cantidad: number = 0;
  
  sumarCantidad(cantidad,cerveza){
    cantidad = cantidad +1;
    
  }

  soloNumeros(event){
    console.log(event);
    if (event.key < "0" || event.key > "9") {
      event.preventDefault();
    }
  }
  
  constructor() {
    
   }

  ngOnInit() {
    this.cervezas = BEERS;
  }

}

import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BeerDataService } from '../beer-data.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  public titulos: object = {
    name : 'Nombre',
    description : "Descripcion",
    stock: "Stock",
    precio : "Precio",
    imagen : "Imagen",
    cantidad: "Cantidad",
    oferta : "Oferta"
  }

  /*
  sumarCantidad(cerveza,cant){
    if (cerveza.stock > cerveza.cantidad){
      cerveza.cantidad = cerveza.cantidad +1;
    }
    console.log(cant);
  }

  restarCantidad(cerveza){
    if (cerveza.cantidad > 0){
      cerveza.cantidad = cerveza.cantidad -1;
    }
  }
*/

  sumarCantidad(cerveza,input){
    if (cerveza.stock > parseInt(input.value)){
      input.value = parseInt(input.value) +1;
    }
  }

  restarCantidad(input){
    if (input.value > 0){
      input.value = parseInt(input.value) -1;
    }
  }

  soloNumerosValidos(event,cantidad,stock){
    const superaStock = (cantidad + event.key) > stock;
    
    if ( (event.key < "0" || event.key > "9") || superaStock ) {
      event.preventDefault();
    }
  }

  public cervezas: Beer[];

  private getCervezas(){
    this.beerDataService.getBeers()
    .subscribe((res:any)=>{
      console.log("obtener cervezas");
      this.cervezas = [];

      for (const cerveza in res) {
        if (res.hasOwnProperty(cerveza)) {
          const element = res[cerveza];
          this.cervezas.push(element);
        }
      }
    });
  }

  constructor(private beerDataService: BeerDataService) { }

  ngOnInit() {
    this.getCervezas();
  }

}

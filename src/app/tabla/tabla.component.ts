import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {

  personas = [{nombre:"Laura", edad: 22, pelo : "castaño", estatura: 1.70, ojos : "negros", talla: 38.5, piel : "blanco", pais: "España"}, 
            {nombre: "Sergio", edad:34, pelo : "rubio", estatura: 1.79 , ojos : "negros", talla: 39.5, piel : "negro", pais: "Marruecos"},
            {nombre: "María", edad:25, pelo : "rubio", estatura: 1.71 , ojos : "verdes", talla: 42.5, piel : "negro", pais: "Portugal"},
            {nombre: "Juan", edad:37, pelo : "pelirrojo", estatura: 1.59 , ojos : "azules", talla: 39.5, piel : "blanco", pais: "España"},
            {nombre: "Lucia", edad:85, pelo : "negro", estatura: 1.83 , ojos : "verdes", talla: 40.5, piel : "negro", pais: "Alemania"},
            {nombre: "Yoan", edad:74, pelo : "negro", estatura: 1.98 , ojos : "azules", talla: 41.0, piel : "negro", pais: "Portugal"},
            {nombre: "Sara", edad:5, pelo : "negro", estatura: 1.52 , ojos : "negros", talla: 42.5, piel : "negro", pais: "España"},
            {nombre: "Thiago", edad:1, pelo : "rubio", estatura: 1.69 , ojos : "azules", talla: 39.5, piel : "blanco", pais: "España"},
            {nombre: "Marcos", edad:17, pelo : "pelirrojo", estatura: 1.54 , ojos : "azules", talla: 38.5, piel : "negro", pais: "Marruecos"},
            {nombre: "Yvonne", edad:29, pelo : "negro", estatura: 1.70 , ojos : "azules", talla: 21.5, piel : "negro", pais: "Portugal"},
            {nombre: "Alejandor", edad:64, pelo : "rubio", estatura: 1.79 , ojos : "negros", talla: 32.0, piel : "blanco", pais: "España"},
            {nombre: "Elena", edad:15, pelo : "negro", estatura: 1.79 , ojos : "verdes", talla: 25.0, piel : "negro", pais: "España"},
            {nombre: "Noelia", edad:52, pelo : "rubio", estatura: 1.70 , ojos : "azules", talla: 37.0, piel : "negro", pais: "España"},
            {nombre: "Alberto", edad:44, pelo : "negro", estatura: 1.69 , ojos : "azules", talla: 45.0, piel : "negro", pais: "Portugal"},
            {nombre: "Lucas", edad:38, pelo : "rubio", estatura: 1.83 , ojos : "verdes", talla: 44.5, piel : "blanco", pais: "España"},
            {nombre: "Thania", edad:24, pelo : "pelirrojo", estatura: 1.98 , ojos : "negros", talla: 38.0, piel : "negro", pais: "Marruecos"}]
  mostrar = true
  
  onChange():void{
    console.log(this.mostrar)
    this.mostrar = !this.mostrar
    console.log(this.mostrar)
  }
}

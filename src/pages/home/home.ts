import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ElementoPage } from '../elemento/elemento';
import { FormularioPage } from '../formulario/formulario';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  lista:Array<any> = [

    {titulo: "Control Digital", id:1, descripcion:"HOLA!!"},
    {titulo: "Impresora 3D", id:2, descripcion:"HOLA!!"},
    {titulo: "Java Swing", id:3, descripcion:"HOLA!!"},
    {titulo: "Sistema Scada", id:4, descripcion:"HOLA!!"},
    
  ];
  constructor(public navCtrl: NavController) {}
  
  agregarPagina(){
    this.navCtrl.push(ElementoPage);
  }

  agregarPagina1(){
    this.navCtrl.push(FormularioPage);
  }
  
}

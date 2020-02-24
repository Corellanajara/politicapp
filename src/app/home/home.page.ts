import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  urlImage = "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg";
  imagenes = ["https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBLsK0K.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=820&y=550","https://cambio21.cl/image/5a678b9eaa2d7465780f94c6.jpg","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2014/03/14/13948191530073.jpg"]
  politicos = [
    {titulo:"sibistin piñiri",descripcion:"este loco es el presidente, siendo que no tendria como chucha un weon tan corrupto ser presidente",contenido:'no pienso hacerle contenido a este culiao.',pifias : [{titulo:"robar a bancos",descripcion:"Roba  con toda la wa"},{titulo:"hacer negocios truchos ",descripcion:'Hola'},{titulo:"ETC",descripcion:"etcetera"}],imagenes: this.imagenes },
    {titulo:"sibistin piñiri 2 ",descripcion:"pa probar el dinamismo",contenido:'no pienso hacerle contenido a este culiao.',pifias : [{titulo:"robar a bancos",descripcion:"Roba  con toda la wa"},{titulo:"hacer negocios truchos ",descripcion:'Hola'},{titulo:"ETC",descripcion:"etcetera"}],imagenes: this.imagenes },
  ]
  constructor() {}
  verPifia(pifia){
    alert(pifia.descripcion);
    alert("Luego esto va a ser un modal");
  }
}

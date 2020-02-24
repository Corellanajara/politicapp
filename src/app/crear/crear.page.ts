import { Component, OnInit } from '@angular/core';
import { PoliticosService } from '../_servicios/politicos.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  pifia = {titulo:'',descripcion:''};
  pifias = [];
  imagen = "";
  imagenes = [];
  titulo = "";
  descripcion = "";
  contenido = "";

  constructor(public toastController: ToastController,public pService : PoliticosService) { }

  ngOnInit() {
  }
  agregarPifia(){
    this.pifias.push(this.pifia);
    this.pifia = {titulo:'',descripcion:''};
  }
  agregarImagen(){
    this.imagenes.push(this.imagen);
    this.imagen = "";
  }
  verPifia(pifia){
    alert(pifia.descripcion);
  }
  agregarNuevo(){
    var politico = {titulo:this.titulo,descripcion : this.descripcion , contenido : this.contenido,pifias:this.pifias,imagenes:this.imagenes};
    this.pService.insertar(politico).subscribe(p=>{
      console.log(p)
    })
  }
}

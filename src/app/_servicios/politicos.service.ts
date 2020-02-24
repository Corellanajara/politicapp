import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class PoliticosService {

  private url: string = "http://178.128.71.20:3900";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url}/politicos/` , {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    });
  }
  insertar(politico : any){
    return this.http.post<any[]>(`${this.url}/politicos/`, politico ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  actualizar(id:number,Menu : any){
    return this.http.put<any[]>(`${this.url}/politicos/${id}`, Menu ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id:string){
    return this.http.delete<any[]>(`${this.url}/politicos/${id}` ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}

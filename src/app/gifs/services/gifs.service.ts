import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'gf0n9mOJOQEq1WBZkefu7wq3xdYL8hux';

  private _historial: string[] = [];
  // TODO: Cambiar any por su tipo
  public resultados: any[] = [];

get historial(){
  
  return [...this._historial];
}

constructor(private http: HttpClient) {}

buscarGifs(query: string){
  query = query.trim().toLocaleLowerCase();// en caso de escribir la misma palabra en minuscula o mayúscula


  if(!this._historial.includes(query)) {
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10); // para ingresar un cierto número de datos
  }
  

  this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=gf0n9mOJOQEq1WBZkefu7wq3xdYL8hux&q=${query}&limit=10`)

    .subscribe((resp: any) =>{
      console.log(resp.data);
      this.resultados = resp.data;
    });
  /*fetch('https://api.giphy.com/v1/gifs/search?api_key=gf0n9mOJOQEq1WBZkefu7wq3xdYL8hux&q&limit=10')
  .then(resp => {
    resp.json().then(data => {
      console.log(data);
    })
  })*/
      
}

}

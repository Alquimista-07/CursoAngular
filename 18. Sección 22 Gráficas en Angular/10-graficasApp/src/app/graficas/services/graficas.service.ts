import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  // Inyectamos el http para poderlo usar
  constructor( private http: HttpClient ) { }
  
  baseUrl = environment.baseUrl;

  // Creamos un método praa traer la información
  getUsuariosRedesSociales() {
    const url = `${this.baseUrl}/grafica`;
    return this.http.get(url);
  }

}

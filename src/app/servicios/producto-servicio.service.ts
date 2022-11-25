import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProductoServicio } from '../modelos/productoservicio.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {
  [x: string]: any;
  url = 'http://localhost:3000';
  token: String = '';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloProductoServicio[]>{
    return this.http.get<ModeloProductoServicio[]>(`${this.url}/productosservicios`);
  }

  ObtenerRegistroPorId(id: string):Observable<ModeloProductoServicio>{    
    return this.http.get<ModeloProductoServicio>(`${this.url}/productosservicios/${id}`,{
      headers: new HttpHeaders({

      })
    });

  }

  CrearProductoServicio(productoservicio: ModeloProductoServicio): Observable<ModeloProductoServicio>{
    return this.http.post<ModeloProductoServicio>(`${this.url}/productosservicios`, productoservicio, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
    
  }

  EditarProductoServicio(productoservicio: ModeloProductoServicio): Observable<ModeloProductoServicio>{
    return this.http.put<ModeloProductoServicio>(`${this.url}/productosservicios/${productoservicio.id}`, productoservicio, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  ActualizarProductoServicio(productoservicio: ModeloProductoServicio): Observable<ModeloProductoServicio>{
    return this.http.put<ModeloProductoServicio>(`${this.url}/productosservicios/${productoservicio.id }`, productoservicio, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  } 


  EliminarProductoServicio(id: string): Observable<any>{
    return this.http.delete(`${this.url}/productosservicios/${id}`, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }
}

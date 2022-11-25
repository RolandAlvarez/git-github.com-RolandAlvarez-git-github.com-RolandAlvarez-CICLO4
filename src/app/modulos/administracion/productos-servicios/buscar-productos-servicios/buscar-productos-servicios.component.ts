import { Component, OnInit } from '@angular/core';
import { ModeloProductoServicio } from 'src/app/modelos/productoservicio.modelo';
import { ProductoServicioService } from 'src/app/servicios/producto-servicio.service';

@Component({
  selector: 'app-buscar-productoservicio',
  templateUrl: './buscar-productos-servicios.component.html',
  styleUrls: ['./buscar-productos-servicios.component.css']
})
export class BuscarProductoServicioComponent implements OnInit {
  
  listadoRegistros: ModeloProductoServicio[] = [];

  constructor(private productoservicioServicio: ProductoServicioService) { }

  ngOnInit(): void {
    this.ObtenerListadoProductoServicios();
  }

  ObtenerListadoProductoServicios(){
    this.productoservicioServicio.ObtenerRegistros().subscribe((datos: ModeloProductoServicio[]) => {
      this.listadoRegistros = datos;
    })

  }

}
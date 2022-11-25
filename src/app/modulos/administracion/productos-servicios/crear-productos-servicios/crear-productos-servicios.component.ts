import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProductoServicio } from 'src/app/modelos/productoservicio.modelo';
import { ProductoServicioService } from 'src/app/servicios/producto-servicio.service';


@Component({
  selector: 'app-crear-productos-servicios', 
  templateUrl: './crear-productos-servicios.component.html', 
  styleUrls: ['./crear-productos-servicios.component.css']
})


export class CrearProductoServicioComponent implements OnInit {
  

  fgValidador: FormGroup =this.fb.group({
    'nombre': ['', [Validators.required]],
    'tipo':['', [Validators.required]],
    'descripcion':['', [Validators.required]],
    'precio':['', [Validators.required]],
  });
  constructor(private fb: FormBuilder,
    private servicioProductoServicio: ProductoServicioService,    
    private router: Router) { }

  ngOnInit(): void {
  }

  CrearProductoServicio(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = this.fgValidador.controls["precio"].value;
    let p =new ModeloProductoServicio();
    p.nombre = nombre;
    p.tipo = tipo;
    p.descripcion = descripcion;
    p.precio = precio
    console.log(p);
this.servicioProductoServicio.CrearProductoServicio(p).subscribe((datos: ModeloProductoServicio) => {
  alert("ProductoServicio guardada correctamente");
  this.router.navigate(["administracion/listar-productos-servicios"]);
}, (error:any) => {
  alert("Error guardando producto-servicio");
})

  }

}

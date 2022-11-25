import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProductoServicio } from 'src/app/modelos/productoservicio.modelo';
import { ProductoServicioService } from 'src/app/servicios/producto-servicio.service';

@Component({
  selector: 'app-editar-productos-servicios',
  templateUrl: './editar-productos-servicios.component.html',
  styleUrls: ['./editar-productos-servicios.component.css']
})
export class EditarProductoServicioComponent implements OnInit {
id:string='';
  fgValidador: FormGroup =this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'tipo':['', [Validators.required]],
    'descripcion':['', [Validators.required]],
    'precio':['', [Validators.required]],
  });
  constructor(private fb: FormBuilder,
    private servicioProductoServicio: ProductoServicioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProductoServicio();
  }

  BuscarProductoServicio(){    
    this.servicioProductoServicio.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloProductoServicio) => {      
    this.fgValidador.controls["id"].setValue(this.id);
    this.fgValidador.controls["nombre"].setValue(datos.nombre);
    this.fgValidador.controls["tipo"].setValue(datos.tipo);
    this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
    this.fgValidador.controls["precio"].setValue(datos.precio);   
    });

}
  

  EditarProductoServicio(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = this.fgValidador.controls["precio"].value;
    let p =new ModeloProductoServicio();
    p.nombre = nombre;
    p.tipo = tipo;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id = this.id;
this.servicioProductoServicio.ActualizarProductoServicio(p).subscribe((datos: ModeloProductoServicio) => {
  alert("ProductoServicio actualizada correctamente");
  this.router.navigate(["administracion/listar-productos-servicios"]);
}, (error:any) => {
  alert("Error actualizando productoservicio");
})

  }


}
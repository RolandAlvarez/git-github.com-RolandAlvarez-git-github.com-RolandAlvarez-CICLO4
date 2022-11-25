import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {
id:string='';
  fgValidador: FormGroup =this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'especie':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'comentario':['', [Validators.required]],
    'estado':['', [Validators.required]],
  });
  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();
  }

  BuscarMascota(){    
    this.servicioMascota.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloMascota) => {      
    this.fgValidador.controls["id"].setValue(this.id);
    this.fgValidador.controls["nombre"].setValue(datos.nombre);
    this.fgValidador.controls["especie"].setValue(datos.especie);
    this.fgValidador.controls["foto"].setValue(datos.foto);
    this.fgValidador.controls["comentario"].setValue(datos.comentario);
    this.fgValidador.controls["estado"].setValue(datos.estado);    
    });

}
  

  EditarMascota(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let especie = this.fgValidador.controls["especie"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let comentario = this.fgValidador.controls["comentario"].value;
    let estado = this.fgValidador.controls["estado"].value;
    let p =new ModeloMascota();
    p.nombre = nombre;
    p.especie = especie;
    p.foto = foto;
    p.comentario = comentario;
    p.estado = estado;
    p.id = this.id;
this.servicioMascota.ActualizarMascota(p).subscribe((datos: ModeloMascota) => {
  alert("Mascota actualizada correctamente");
  this.router.navigate(["administracion/listar-mascotas"]);
}, (error:any) => {
  alert("Error actualizando mascota");
})

  }


}

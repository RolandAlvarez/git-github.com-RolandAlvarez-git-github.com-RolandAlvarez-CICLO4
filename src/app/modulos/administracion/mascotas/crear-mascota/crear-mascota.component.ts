import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';


@Component({
  selector: 'app-crear-mascota', 
  templateUrl: './crear-mascota.component.html', 
  styleUrls: ['./crear-mascota.component.css']
})


export class CrearMascotaComponent implements OnInit {
  

  fgValidador: FormGroup =this.fb.group({
    'nombre': ['', [Validators.required]],
    'especie':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'comentario':['', [Validators.required]],
    'estado':['', [Validators.required]],
  });
  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,    
    private router: Router) { }

  ngOnInit(): void {
  }

  CrearMascota(){
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
    p.estado = estado
    console.log(p);
this.servicioMascota.CrearMascota(p).subscribe((datos: ModeloMascota) => {
  alert("Mascota guardada correctamente");
  this.router.navigate(["administracion/listar-mascotas"]);
}, (error:any) => {
  alert("Error guardando mascota");
})

  }

}

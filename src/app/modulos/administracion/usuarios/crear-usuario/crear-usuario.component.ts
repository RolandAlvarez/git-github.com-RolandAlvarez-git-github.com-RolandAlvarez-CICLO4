import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  fgValidador: FormGroup =this.fb.group({
    'nombre': ['', [Validators.required]],
    'apellido':['', [Validators.required]],
    'cedula':['', [Validators.required]],
    'telefono':['', [Validators.required]],
    'correo':['', [Validators.required]],
    'rol':['', [Validators.required]],
  });
  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,    
    private router: Router) { }

  ngOnInit(): void {
  }

 CrearUsuario(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let cedula = this.fgValidador.controls["cedula"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let rol = this.fgValidador.controls["rol"].value;
    let p =new ModeloUsuario();
    p.nombre = nombre;
    p.apellido = apellido;
    p.cedula = cedula;
    p.telefono = telefono;
    p.correo = correo;
    p.rol = rol
    console.log(p);
this.servicioUsuario.CrearUsuario(p).subscribe((datos: ModeloUsuario) => {
  alert("Usuario guardado correctamente");
  this.router.navigate(["administracion/listar-usuarios"]);
}, (error:any) => {
  alert("Error guardando usuario");
})

  }

}

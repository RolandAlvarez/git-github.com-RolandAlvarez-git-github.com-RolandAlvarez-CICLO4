import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  id:string='';
  fgValidador: FormGroup =this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido':['', [Validators.required]],
    'cedula':['', [Validators.required]],
    'telefono':['', [Validators.required]],
    'correo':['', [Validators.required]],
    'rol':['', [Validators.required]],
  });
  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }

  BuscarUsuario(){    
    this.servicioUsuario.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloUsuario) => {      
    this.fgValidador.controls["id"].setValue(this.id);
    this.fgValidador.controls["nombre"].setValue(datos.nombre);
    this.fgValidador.controls["apellido"].setValue(datos.apellido);
    this.fgValidador.controls["cedula"].setValue(datos.cedula);
    this.fgValidador.controls["telefono"].setValue(datos.telefono);
    this.fgValidador.controls["correo"].setValue(datos.correo);    
    this.fgValidador.controls["rol"].setValue(datos.rol);  
    });

}
  

  EditarUsuario(){
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
    p.rol = rol;
    p.id = this.id;
this.servicioUsuario.ActualizarUsuario(p).subscribe((datos: ModeloUsuario) => {
  alert("Usuario actualizado correctamente");
  this.router.navigate(["administracion/listar-usuarios"]);
}, (error:any) => {
  alert("Error actualizando usuario");
})

  }


}

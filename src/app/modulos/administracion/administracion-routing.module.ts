import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { BuscarProductoServicioComponent } from './productos-servicios/buscar-productos-servicios/buscar-productos-servicios.component';
import { CrearProductoServicioComponent } from './productos-servicios/crear-productos-servicios/crear-productos-servicios.component';
import { EditarProductoServicioComponent } from './productos-servicios/editar-productos-servicios/editar-productos-servicios.component';
import { AprobarProspectoComponent } from './prospectos/aprobar-prospecto/aprobar-prospecto.component';
import { RechazarProspectoComponent } from './prospectos/rechazar-prospecto/rechazar-prospecto.component';
import { VerProspectoComponent } from './prospectos/ver-prospecto/ver-prospecto.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: "crear-usuario",
    component: CrearUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "buscar-usuario",
    component: BuscarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-usuario",
    component: EditarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminar-usuario",
    component: EliminarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-usuario/:id",
    component: EditarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "listar-usuarios",
    component: BuscarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "listar-mascotas",
    component: BuscarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "crear-mascota",
    component: CrearMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-mascota/:id",
    component: EditarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "ver-prospecto",
    component: VerProspectoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "listar-productos-servicios",
    component: BuscarProductoServicioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "crear-productos-servicios",
    component: CrearProductoServicioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-productos-servicios",
    component: EditarProductoServicioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  
  {
    path: "crear-sucursal",
    component: CrearSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "listar-sucursales",
    component: BuscarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "buscar-sucursal",
    component: BuscarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-sucursal",
    component: EditarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminar-sucursal",
    component: EliminarSucursalComponent,
    
  },
  {
    path: "editar-sucursal/:id",
    component: EditarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "aprobar-prospecto",
    component: AprobarProspectoComponent,
    
  },
  {
    path: "rechazar-prospecto",
    component: RechazarProspectoComponent,
    
  },
  {
    path: "buscar-plan",
    component: BuscarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminar-usuario/:id",
    component: EliminarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminar-mascota/:id",
    component: EliminarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

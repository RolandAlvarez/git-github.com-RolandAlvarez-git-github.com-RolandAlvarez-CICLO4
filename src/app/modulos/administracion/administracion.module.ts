import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { PlanesComponent } from './planes/planes.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { ProductosServiciosComponent } from './productos-servicios/productos-servicios.component';
import { CrearProductosServiciosComponent } from './productos-servicios/crear-productos-servicios/crear-productos-servicios.component';
import { EditarProductosServiciosComponent } from './productos-servicios/editar-productos-servicios/editar-productos-servicios.component';
import { BuscarProductosServiciosComponent } from './productos-servicios/buscar-productos-servicios/buscar-productos-servicios.component';
import { EliminarProductosServiciosComponent } from './productos-servicios/eliminar-productos-servicios/eliminar-productos-servicios.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { AprobarProspectoComponent } from './prospectos/aprobar-prospecto/aprobar-prospecto.component';
import { RechazarProspectoComponent } from './prospectos/rechazar-prospecto/rechazar-prospecto.component';
import { VerProspectoComponent } from './prospectos/ver-prospecto/ver-prospecto.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    PlanesComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    BuscarPlanComponent,
    SucursalesComponent,
    CrearSucursalComponent,
    EditarSucursalComponent,
    EliminarSucursalComponent,
    BuscarSucursalComponent,
    ProductosServiciosComponent,
    CrearProductosServiciosComponent,
    EditarProductosServiciosComponent,
    BuscarProductosServiciosComponent,
    EliminarProductosServiciosComponent,
    MascotasComponent,
    CrearMascotaComponent,
    BuscarMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    ProspectosComponent,
    AprobarProspectoComponent,
    RechazarProspectoComponent,
    VerProspectoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionRoutingModule } from './afiliacion-routing.module';
import { AsignarPlanAMascotaComponent } from './asignar-plan-a-mascota/asignar-plan-a-mascota.component';
import { AsignarClienteAMascotaComponent } from './asignar-cliente-a-mascota/asignar-cliente-a-mascota.component';
import { AsignarAsesorAMascotaComponent } from './asignar-asesor-a-mascota/asignar-asesor-a-mascota.component';
import { AprobarAfiliacionComponent } from './aprobar-afiliacion/aprobar-afiliacion.component';
import { RechazarAfiliacionComponent } from './rechazar-afiliacion/rechazar-afiliacion.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CrearPedidoComponent } from './pedidos/crear-pedido/crear-pedido.component';
import { EliminarPedidoComponent } from './pedidos/eliminar-pedido/eliminar-pedido.component';
import { EditarPedidoComponent } from './pedidos/editar-pedido/editar-pedido.component';
import { PagarPedidoComponent } from './pedidos/pagar-pedido/pagar-pedido.component';
import { EliminarSolicitudAfiliacionComponent } from './eliminar-solicitud-afiliacion/eliminar-solicitud-afiliacion.component';
import { SolicitarAfiliacionComponent } from './solicitar-afiliacion/solicitar-afiliacion.component';


@NgModule({
  declarations: [
    AsignarPlanAMascotaComponent,
    AsignarClienteAMascotaComponent,
    AsignarAsesorAMascotaComponent,
    AprobarAfiliacionComponent,
    RechazarAfiliacionComponent,
    PedidosComponent,
    CrearPedidoComponent,
    EliminarPedidoComponent,
    EditarPedidoComponent,
    PagarPedidoComponent,
    EliminarSolicitudAfiliacionComponent,
    SolicitarAfiliacionComponent
  ],
  imports: [
    CommonModule,
    AfiliacionRoutingModule
  ]
})
export class AfiliacionModule { }

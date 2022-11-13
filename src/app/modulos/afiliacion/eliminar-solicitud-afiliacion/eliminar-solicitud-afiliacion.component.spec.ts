import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSolicitudAfiliacionComponent } from './eliminar-solicitud-afiliacion.component';

describe('EliminarSolicitudAfiliacionComponent', () => {
  let component: EliminarSolicitudAfiliacionComponent;
  let fixture: ComponentFixture<EliminarSolicitudAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSolicitudAfiliacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarSolicitudAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

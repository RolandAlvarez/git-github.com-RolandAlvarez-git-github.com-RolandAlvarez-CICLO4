import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductoServicioComponent } from './editar-productos-servicios.component';

describe('EditarProductosServiciosComponent', () => {
  let component: EditarProductoServicioComponent;
  let fixture: ComponentFixture<EditarProductoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProductoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProductoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

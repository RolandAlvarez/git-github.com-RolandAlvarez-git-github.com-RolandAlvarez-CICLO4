import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoServicioComponent } from './crear-productos-servicios.component';

describe('CrearProductosServiciosComponent', () => {
  let component: CrearProductoServicioComponent;
  let fixture: ComponentFixture<CrearProductoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProductoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProductoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

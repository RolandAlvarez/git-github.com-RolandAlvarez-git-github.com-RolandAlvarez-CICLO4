import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductosServiciosComponent } from './crear-productos-servicios.component';

describe('CrearProductosServiciosComponent', () => {
  let component: CrearProductosServiciosComponent;
  let fixture: ComponentFixture<CrearProductosServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProductosServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProductosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

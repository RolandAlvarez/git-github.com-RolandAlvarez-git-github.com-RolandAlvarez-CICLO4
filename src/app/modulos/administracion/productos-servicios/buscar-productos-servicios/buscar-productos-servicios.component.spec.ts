import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProductosServiciosComponent } from './buscar-productos-servicios.component';

describe('BuscarProductosServiciosComponent', () => {
  let component: BuscarProductosServiciosComponent;
  let fixture: ComponentFixture<BuscarProductosServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProductosServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProductosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

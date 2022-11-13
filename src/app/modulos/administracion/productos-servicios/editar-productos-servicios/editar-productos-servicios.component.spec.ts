import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductosServiciosComponent } from './editar-productos-servicios.component';

describe('EditarProductosServiciosComponent', () => {
  let component: EditarProductosServiciosComponent;
  let fixture: ComponentFixture<EditarProductosServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProductosServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProductosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

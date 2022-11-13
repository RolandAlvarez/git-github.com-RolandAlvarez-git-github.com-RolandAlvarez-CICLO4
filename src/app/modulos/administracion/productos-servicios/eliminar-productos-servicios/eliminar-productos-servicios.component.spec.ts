import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProductosServiciosComponent } from './eliminar-productos-servicios.component';

describe('EliminarProductosServiciosComponent', () => {
  let component: EliminarProductosServiciosComponent;
  let fixture: ComponentFixture<EliminarProductosServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProductosServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProductosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

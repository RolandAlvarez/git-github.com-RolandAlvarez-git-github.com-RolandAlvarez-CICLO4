import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarClienteAMascotaComponent } from './asignar-cliente-a-mascota.component';

describe('AsignarClienteAMascotaComponent', () => {
  let component: AsignarClienteAMascotaComponent;
  let fixture: ComponentFixture<AsignarClienteAMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarClienteAMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarClienteAMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

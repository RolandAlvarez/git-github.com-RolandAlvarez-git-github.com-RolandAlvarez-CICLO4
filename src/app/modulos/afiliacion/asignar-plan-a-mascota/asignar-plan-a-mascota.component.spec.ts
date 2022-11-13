import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPlanAMascotaComponent } from './asignar-plan-a-mascota.component';

describe('AsignarPlanAMascotaComponent', () => {
  let component: AsignarPlanAMascotaComponent;
  let fixture: ComponentFixture<AsignarPlanAMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPlanAMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarPlanAMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

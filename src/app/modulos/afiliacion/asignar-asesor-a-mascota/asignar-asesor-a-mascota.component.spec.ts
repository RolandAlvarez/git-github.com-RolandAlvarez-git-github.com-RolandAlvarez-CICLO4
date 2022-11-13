import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarAsesorAMascotaComponent } from './asignar-asesor-a-mascota.component';

describe('AsignarAsesorAMascotaComponent', () => {
  let component: AsignarAsesorAMascotaComponent;
  let fixture: ComponentFixture<AsignarAsesorAMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarAsesorAMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarAsesorAMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

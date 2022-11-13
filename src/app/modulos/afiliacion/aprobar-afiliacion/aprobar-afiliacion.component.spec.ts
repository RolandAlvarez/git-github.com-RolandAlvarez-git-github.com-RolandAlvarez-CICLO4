import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarAfiliacionComponent } from './aprobar-afiliacion.component';

describe('AprobarAfiliacionComponent', () => {
  let component: AprobarAfiliacionComponent;
  let fixture: ComponentFixture<AprobarAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobarAfiliacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobarAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

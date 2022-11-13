import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarProspectoComponent } from './aprobar-prospecto.component';

describe('AprobarProspectoComponent', () => {
  let component: AprobarProspectoComponent;
  let fixture: ComponentFixture<AprobarProspectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobarProspectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobarProspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechazarProspectoComponent } from './rechazar-prospecto.component';

describe('RechazarProspectoComponent', () => {
  let component: RechazarProspectoComponent;
  let fixture: ComponentFixture<RechazarProspectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechazarProspectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechazarProspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

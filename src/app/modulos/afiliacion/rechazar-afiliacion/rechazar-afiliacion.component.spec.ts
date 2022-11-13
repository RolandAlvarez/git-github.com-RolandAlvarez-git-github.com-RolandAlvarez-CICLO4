import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechazarAfiliacionComponent } from './rechazar-afiliacion.component';

describe('RechazarAfiliacionComponent', () => {
  let component: RechazarAfiliacionComponent;
  let fixture: ComponentFixture<RechazarAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechazarAfiliacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechazarAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

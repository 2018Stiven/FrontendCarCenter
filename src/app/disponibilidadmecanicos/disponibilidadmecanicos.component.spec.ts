import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadmecanicosComponent } from './disponibilidadmecanicos.component';

describe('DisponibilidadmecanicosComponent', () => {
  let component: DisponibilidadmecanicosComponent;
  let fixture: ComponentFixture<DisponibilidadmecanicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibilidadmecanicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadmecanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

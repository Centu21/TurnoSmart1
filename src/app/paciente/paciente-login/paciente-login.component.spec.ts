import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteLoginComponent } from './paciente-login.component';

describe('PacienteLoginComponent', () => {
  let component: PacienteLoginComponent;
  let fixture: ComponentFixture<PacienteLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

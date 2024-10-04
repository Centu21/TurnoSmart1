import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteReservaEstudiosComponent } from './paciente-reserva-estudios.component';

describe('PacienteReservaEstudiosComponent', () => {
  let component: PacienteReservaEstudiosComponent;
  let fixture: ComponentFixture<PacienteReservaEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteReservaEstudiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteReservaEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

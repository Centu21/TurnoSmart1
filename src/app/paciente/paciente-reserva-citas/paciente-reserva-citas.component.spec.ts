import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteReservaCitasComponent } from './paciente-reserva-citas.component';

describe('PacienteReservaEstudiosComponent', () => {
  let component: PacienteReservaCitasComponent;
  let fixture: ComponentFixture<PacienteReservaCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteReservaCitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteReservaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

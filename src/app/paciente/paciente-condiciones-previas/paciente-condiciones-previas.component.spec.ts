import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCondicionesPreviasComponent } from './paciente-condiciones-previas.component';

describe('PacienteCondicionesPreviasComponent', () => {
  let component: PacienteCondicionesPreviasComponent;
  let fixture: ComponentFixture<PacienteCondicionesPreviasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteCondicionesPreviasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteCondicionesPreviasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

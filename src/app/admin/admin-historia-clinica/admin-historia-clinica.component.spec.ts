import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHistoriaClinicaComponent } from './admin-historia-clinica.component';

describe('AdminHistoriaClinicaComponent', () => {
  let component: AdminHistoriaClinicaComponent;
  let fixture: ComponentFixture<AdminHistoriaClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHistoriaClinicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHistoriaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionCitasComponent } from './admin-gestion-citas.component';

describe('AdminGestionCitasComponent', () => {
  let component: AdminGestionCitasComponent;
  let fixture: ComponentFixture<AdminGestionCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGestionCitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGestionCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

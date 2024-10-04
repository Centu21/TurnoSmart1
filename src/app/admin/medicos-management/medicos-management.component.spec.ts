import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosManagementComponent } from './medicos-management.component';

describe('MedicosManagementComponent', () => {
  let component: MedicosManagementComponent;
  let fixture: ComponentFixture<MedicosManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicosManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicosManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

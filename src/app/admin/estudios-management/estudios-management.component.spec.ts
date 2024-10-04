import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosManagementComponent } from './estudios-management.component';

describe('EstudiosManagementComponent', () => {
  let component: EstudiosManagementComponent;
  let fixture: ComponentFixture<EstudiosManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiosManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

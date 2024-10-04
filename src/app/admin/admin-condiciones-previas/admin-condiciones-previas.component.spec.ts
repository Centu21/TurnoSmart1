import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCondicionesPreviasComponent } from './admin-condiciones-previas.component';

describe('AdminCondicionesPreviasComponent', () => {
  let component: AdminCondicionesPreviasComponent;
  let fixture: ComponentFixture<AdminCondicionesPreviasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCondicionesPreviasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCondicionesPreviasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

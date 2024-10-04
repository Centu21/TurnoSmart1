import { TestBed } from '@angular/core/testing';

import { ReservaEstudiosService } from './reserva-estudios.service';

describe('ReservaEstudiosService', () => {
  let service: ReservaEstudiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaEstudiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

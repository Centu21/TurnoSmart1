import { TestBed } from '@angular/core/testing';

import { CondicionesPreviasService } from './condiciones-previas.service';

describe('CondicionesPreviasService', () => {
  let service: CondicionesPreviasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondicionesPreviasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

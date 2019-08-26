import { TestBed } from '@angular/core/testing';

import { FormandosService } from './formandos.service';

describe('FormandosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormandosService = TestBed.get(FormandosService);
    expect(service).toBeTruthy();
  });
});

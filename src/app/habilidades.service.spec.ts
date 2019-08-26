import { TestBed } from '@angular/core/testing';

import { HabilidadesService } from './habilidades.service';

describe('HabilidadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HabilidadesService = TestBed.get(HabilidadesService);
    expect(service).toBeTruthy();
  });
});

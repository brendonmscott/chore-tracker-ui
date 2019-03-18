import { TestBed } from '@angular/core/testing';

import { ChoresService } from './chores.service';

describe('ChoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChoresService = TestBed.get(ChoresService);
    expect(service).toBeTruthy();
  });
});

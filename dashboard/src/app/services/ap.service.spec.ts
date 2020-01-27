import { TestBed } from '@angular/core/testing';

import { ApService } from './ap.service';

describe('ApService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApService = TestBed.get(ApService);
    expect(service).toBeTruthy();
  });
});

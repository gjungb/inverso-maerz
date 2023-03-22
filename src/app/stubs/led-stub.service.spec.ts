import { TestBed } from '@angular/core/testing';

import { LedStubService } from './led-stub.service';

describe('LedStubService', () => {
  let service: LedStubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LedStubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

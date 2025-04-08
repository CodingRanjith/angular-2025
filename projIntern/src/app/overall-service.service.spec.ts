import { TestBed } from '@angular/core/testing';

import { OverallServiceService } from './overall-service.service';

describe('OverallServiceService', () => {
  let service: OverallServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverallServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

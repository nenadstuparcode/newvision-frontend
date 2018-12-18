import { TestBed, inject } from '@angular/core/testing';

import { DriverlicenceService } from './driverlicence.service';

describe('DriverlicenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverlicenceService]
    });
  });

  it('should be created', inject([DriverlicenceService], (service: DriverlicenceService) => {
    expect(service).toBeTruthy();
  }));
});

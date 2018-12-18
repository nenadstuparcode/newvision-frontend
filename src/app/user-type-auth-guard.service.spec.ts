import { TestBed, inject } from '@angular/core/testing';

import { UserTypeAuthGuardService } from './user-type-auth-guard.service';

describe('UserTypeAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTypeAuthGuardService]
    });
  });

  it('should be created', inject([UserTypeAuthGuardService], (service: UserTypeAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});

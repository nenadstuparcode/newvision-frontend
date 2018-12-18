import { TestBed, inject } from '@angular/core/testing';

import { SkillsetService } from './skillset.service';

describe('SkillsetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillsetService]
    });
  });

  it('should be created', inject([SkillsetService], (service: SkillsetService) => {
    expect(service).toBeTruthy();
  }));
});

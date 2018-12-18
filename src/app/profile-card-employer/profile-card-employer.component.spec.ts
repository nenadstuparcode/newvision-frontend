import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardEmployerComponent } from './profile-card-employer.component';

describe('ProfileCardEmployerComponent', () => {
  let component: ProfileCardEmployerComponent;
  let fixture: ComponentFixture<ProfileCardEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCardEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEmployerComponent } from './navbar-employer.component';

describe('NavbarEmployerComponent', () => {
  let component: NavbarEmployerComponent;
  let fixture: ComponentFixture<NavbarEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

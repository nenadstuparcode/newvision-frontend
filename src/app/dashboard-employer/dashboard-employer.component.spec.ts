import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployerComponent } from './dashboard-employer.component';

describe('DashboardEmployerComponent', () => {
  let component: DashboardEmployerComponent;
  let fixture: ComponentFixture<DashboardEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

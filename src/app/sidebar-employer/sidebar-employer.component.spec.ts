import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEmployerComponent } from './sidebar-employer.component';

describe('SidebarEmployerComponent', () => {
  let component: SidebarEmployerComponent;
  let fixture: ComponentFixture<SidebarEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

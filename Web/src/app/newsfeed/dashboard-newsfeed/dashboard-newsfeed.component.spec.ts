import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsfeedComponent } from './dashboard-newsfeed.component';

describe('DashboardNewsfeedComponent', () => {
  let component: DashboardNewsfeedComponent;
  let fixture: ComponentFixture<DashboardNewsfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNewsfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDonAnCungComponent } from './dashboard-don-an-cung.component';

describe('DashboardDonAnCungComponent', () => {
  let component: DashboardDonAnCungComponent;
  let fixture: ComponentFixture<DashboardDonAnCungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDonAnCungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDonAnCungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

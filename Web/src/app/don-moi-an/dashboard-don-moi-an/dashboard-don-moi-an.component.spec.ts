import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDonMoiAnComponent } from './dashboard-don-moi-an.component';

describe('DashboardDonMoiAnComponent', () => {
  let component: DashboardDonMoiAnComponent;
  let fixture: ComponentFixture<DashboardDonMoiAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDonMoiAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDonMoiAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

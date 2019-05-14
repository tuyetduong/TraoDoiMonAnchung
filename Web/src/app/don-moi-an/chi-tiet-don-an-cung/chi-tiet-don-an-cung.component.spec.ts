import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietDonAnCungComponent } from './chi-tiet-don-an-cung.component';

describe('ChiTietDonAnCungComponent', () => {
  let component: ChiTietDonAnCungComponent;
  let fixture: ComponentFixture<ChiTietDonAnCungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietDonAnCungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietDonAnCungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

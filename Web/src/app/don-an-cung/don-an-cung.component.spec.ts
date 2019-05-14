import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonAnCungComponent } from './don-an-cung.component';

describe('DonAnCungComponent', () => {
  let component: DonAnCungComponent;
  let fixture: ComponentFixture<DonAnCungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonAnCungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonAnCungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

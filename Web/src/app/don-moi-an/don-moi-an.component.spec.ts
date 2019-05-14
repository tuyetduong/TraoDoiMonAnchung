import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonMoiAnComponent } from './don-moi-an.component';

describe('DonMoiAnComponent', () => {
  let component: DonMoiAnComponent;
  let fixture: ComponentFixture<DonMoiAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonMoiAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonMoiAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

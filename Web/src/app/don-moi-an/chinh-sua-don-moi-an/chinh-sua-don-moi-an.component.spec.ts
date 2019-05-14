import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhSuaDonMoiAnComponent } from './chinh-sua-don-moi-an.component';

describe('ChinhSuaDonMoiAnComponent', () => {
  let component: ChinhSuaDonMoiAnComponent;
  let fixture: ComponentFixture<ChinhSuaDonMoiAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhSuaDonMoiAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhSuaDonMoiAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

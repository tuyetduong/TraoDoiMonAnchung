import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoDonMoiAnComponent } from './tao-don-moi-an.component';

describe('TaoDonMoiAnComponent', () => {
  let component: TaoDonMoiAnComponent;
  let fixture: ComponentFixture<TaoDonMoiAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoDonMoiAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoDonMoiAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

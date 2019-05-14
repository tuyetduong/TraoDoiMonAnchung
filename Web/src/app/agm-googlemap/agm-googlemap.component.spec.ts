import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmGooglemapComponent } from './agm-googlemap.component';

describe('AgmGooglemapComponent', () => {
  let component: AgmGooglemapComponent;
  let fixture: ComponentFixture<AgmGooglemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmGooglemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmGooglemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

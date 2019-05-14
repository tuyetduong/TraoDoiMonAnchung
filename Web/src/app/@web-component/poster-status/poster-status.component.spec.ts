import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterStatusComponent } from './poster-status.component';

describe('PosterStatusComponent', () => {
  let component: PosterStatusComponent;
  let fixture: ComponentFixture<PosterStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

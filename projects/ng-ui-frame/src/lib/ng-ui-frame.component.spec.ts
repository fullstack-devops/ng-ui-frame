import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUiFrameComponent } from './ng-ui-frame.component';

describe('NgUiFrameComponent', () => {
  let component: NgUiFrameComponent;
  let fixture: ComponentFixture<NgUiFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgUiFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUiFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

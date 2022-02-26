import { TestBed } from '@angular/core/testing';

import { NgUiFrameService } from './ng-ui-frame.service';

describe('NgUiFrameService', () => {
  let service: NgUiFrameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgUiFrameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

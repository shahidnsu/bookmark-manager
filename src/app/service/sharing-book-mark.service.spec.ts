import { TestBed } from '@angular/core/testing';

import { SharingBookMarkService } from './sharing-book-mark.service';

describe('SharingBookMarkService', () => {
  let service: SharingBookMarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharingBookMarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ShareComLibService } from './share-com-lib.service';

describe('ShareComLibService', () => {
  let service: ShareComLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareComLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

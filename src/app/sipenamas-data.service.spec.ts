import { TestBed } from '@angular/core/testing';

import { SipenamasDataService } from './sipenamas-data.service';

describe('SipenamasDataService', () => {
  let service: SipenamasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SipenamasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

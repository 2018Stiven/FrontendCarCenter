import { TestBed } from '@angular/core/testing';

import { MecanicoservicesService } from './mecanicoservices.service';

describe('MecanicoservicesService', () => {
  let service: MecanicoservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MecanicoservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

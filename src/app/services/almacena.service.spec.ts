import { TestBed } from '@angular/core/testing';

import { AlmacenaService } from './almacena.service';

describe('AlmacenaService', () => {
  let service: AlmacenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

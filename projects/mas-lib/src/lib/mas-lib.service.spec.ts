import { TestBed } from '@angular/core/testing';

import { MasLibService } from './mas-lib.service';

describe('MasLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasLibService = TestBed.get(MasLibService);
    expect(service).toBeTruthy();
  });
});

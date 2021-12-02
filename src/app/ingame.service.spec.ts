import { TestBed } from '@angular/core/testing';

import { IngameService } from './ingame.service';

describe('IngameService', () => {
  let service: IngameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TypeTextService } from './type-text.service';

describe('TypeTextService', () => {
  let service: TypeTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

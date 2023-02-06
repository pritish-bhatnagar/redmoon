import { TestBed } from '@angular/core/testing';

import { LogoutUsecase } from './logout.usecase';

describe('LogoutUsecase', () => {
  let service: LogoutUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

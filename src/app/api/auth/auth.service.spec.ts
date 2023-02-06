import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sign in successful', async () => {
    const inputEmail = 'chintan@gmail.com';
    const inputPassword = 'chintan';
    const expectedResponse = { token: 'token@123'}
    const response = await service.signin(inputEmail, inputPassword);
    expect(response).toEqual(expectedResponse);
  });
});

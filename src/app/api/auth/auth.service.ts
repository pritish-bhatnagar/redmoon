import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SignInResponse, SignInRequest } from './dto/signin.dto';
import { Api, delay } from '../api';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends Api {

  basePath: string = '/auth';

  constructor(
    // private httpClient: HttpClient
    ) { super(); }

  async signin(email: string, password: string): Promise<SignInResponse> {
    const signInRequest: SignInRequest = {
      email: email,
      password: password
    }

    // return firstValueFrom(this.httpClient.post<SignInResponse>(this.baseUrl + this.basePath + '/signin', signInRequest));

    await delay(3);
    const signInResponse: SignInResponse = {
      token: "token@123"
    }
    return signInResponse;
  }

  async signUp(firstName: string, lastName: string, email: string, password: string): Promise<SignInResponse> {
    const signInRequest: SignInRequest = {
      email: email,
      password: password
    }

    // return firstValueFrom(this.httpClient.post<SignInResponse>(this.baseUrl + this.basePath + '/signin', signInRequest));

    await delay(3);
    const signInResponse: SignInResponse = {
      token: "token@123"
    }
    return signInResponse;
  }
}

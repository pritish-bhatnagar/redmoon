import { Injectable } from '@angular/core';
import { Api, delay } from '../api';
import { GetAllResponse } from './dto/get-all.dto';
import { User } from './dto/user.dto';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';
import { Result, UserDataRespose } from './dto/user-data.dto';
@Injectable({
  providedIn: 'root'
})
export class UserService extends Api {

  basePath: string = '/users';

  constructor(private http: HttpClient) { super(); }

  async getAll(): Promise<GetAllResponse> {
    const users: User[] = [
      {
        id: 'abcasdasdeas',
        firstName: 'Chintan',
        lastName: 'Soni',
        email: 'chintan@gmail.com',
        isActive: true
      }
    ]
    const response: GetAllResponse = {
      users: users
    }
    await delay(3);
    return response;
  }

  async logout() {
    await delay(3);
  }
  async getUserData(): Promise<Result[]> {
    return firstValueFrom(this.http.get<UserDataRespose>(this.baseUrl).pipe(map(value => value.results)));
  }

}


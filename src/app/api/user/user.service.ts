import { Injectable } from '@angular/core';
import { Api, delay } from '../api';
import { GetAllResponse } from './dto/get-all.dto';
import { User, Data } from './dto/user.dto';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService extends Api{

  basePath: string = '/users';
  data: any;

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
  async getUserData(): Promise<Object>{
    this.data=firstValueFrom(this.http.get(this.baseUrl));
    return this.data;
  }
  
}


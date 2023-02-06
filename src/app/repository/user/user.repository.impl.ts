import { Injectable } from '@angular/core';
import {} from 'domain'
import { UserService } from 'src/app/api/user/user.service';
import { UserStore } from 'src/app/db/user.store';
import { User } from 'src/app/domain/model/user.model';
import { UserRepository } from 'src/app/domain/repository/user.repository';
import { apiToDb, dbToDomain } from '../mapper/user.mapper';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryImpl implements UserRepository {

  constructor(private readonly userService: UserService, private readonly userStore: UserStore) {  }

  async getAll(): Promise<User[]> {
    const response = await this.userService.getAll();
    const promises = response.users.map(async element => {
      this.userStore.insert(apiToDb(element));
    });
    await Promise.all(promises);
    return (await this.userStore.getAll()).map(element => dbToDomain(element));
  }

  async logout() {
    await this.userService.logout();
    await this.userStore.clear();
  }
   getUserData() {
    return this.userService.getUserData();
  }
}

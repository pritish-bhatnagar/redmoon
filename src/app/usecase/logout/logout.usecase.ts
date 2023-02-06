import { Inject, Injectable } from '@angular/core';
import { AuthRepository } from 'src/app/domain/repository/auth.repository';
import { UserRepository } from 'src/app/domain/repository/user.repository';

@Injectable({
  providedIn: 'root'
})
export class LogoutUsecase {

  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('AuthRepository')  private readonly authRepository: AuthRepository) { }

  async logout() {
    await this.userRepository.logout();
    await this.authRepository.logout();
  }
  getAll(){
    return this.userRepository.getUserData();
  }
}

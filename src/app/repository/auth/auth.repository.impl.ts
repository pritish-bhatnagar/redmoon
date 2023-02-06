import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/api/auth/auth.service';
import { AuthCache } from 'src/app/cache/auth.cache';
import { AuthRepository } from 'src/app/domain/repository/auth.repository';

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryImpl implements AuthRepository {

  constructor(
    private readonly authCache: AuthCache,
    private readonly authService: AuthService
    ) { }

  async signin(email: string, password: string): Promise<void> {
    const response = await this.authService.signin(email, password);
    console.log(response);

    await this.authCache.saveToken(response.token);
  }

  async logout() {
    this.authCache.clear()
  }
}

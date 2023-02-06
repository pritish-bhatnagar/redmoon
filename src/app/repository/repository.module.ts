import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule } from '../domain/domain.module';
import { DbModule } from '../db/db.module';
import { CacheModule } from '../cache/cache.module';
import { ApiModule } from '../api/api.module';
import { AuthRepositoryImpl } from './auth/auth.repository.impl';
import { UserRepositoryImpl } from './user/user.repository.impl';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DomainModule,
    DbModule,
    CacheModule,
    ApiModule
  ],
  providers: [
    AuthRepositoryImpl,
    UserRepositoryImpl,
    {
      provide: 'AuthRepository',
      useClass: AuthRepositoryImpl
    },
    {
      provide: 'UserRepository',
      useClass: UserRepositoryImpl
    }
  ],
  exports: [DomainModule]
})
export class RepositoryModule { }

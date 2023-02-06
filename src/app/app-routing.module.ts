import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { SigninComponent } from './ui/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

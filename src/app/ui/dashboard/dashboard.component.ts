import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardViewModel } from './dashboard.viewmodel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardViewModel]
})
export class DashboardComponent implements OnInit {

  isLoading: boolean = false;
  data: any;

  constructor(private readonly router: Router, private readonly viewModel: DashboardViewModel) { }

  ngOnInit() {
     console.log(this.viewModel.getUserData());
     this.data=this.viewModel.getUserData();
     
  }

  async logout() {
    this.isLoading = true;
    try {
      await this.viewModel.logout();
      this.router.navigateByUrl('/', {replaceUrl: true});
    } catch (error) {
      console.error(error)
    } finally {
      this.isLoading = false;
    }
  }
}

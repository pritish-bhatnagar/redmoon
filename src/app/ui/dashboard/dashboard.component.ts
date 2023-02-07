import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FResult } from 'src/app/domain/model/user-data.model';
import { DashboardViewModel } from './dashboard.viewmodel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardViewModel]
})
export class DashboardComponent implements OnInit {

  isLoading: boolean = false;
data: FResult[]=[];
  constructor(private readonly router: Router, private readonly viewModel: DashboardViewModel) { }

  async ngOnInit() {
     console.log(await this.viewModel.getUserData());
     this.data=await this.viewModel.getUserData()
    console.log(this.data);
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

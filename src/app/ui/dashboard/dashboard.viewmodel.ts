import { Injectable } from "@angular/core";
import { LogoutUsecase } from "src/app/usecase/logout/logout.usecase";

@Injectable()
class DashboardViewModel {
  logout() {
    return this.logoutUsecase.logout();
  }
  constructor(private readonly logoutUsecase: LogoutUsecase ) {

  }
  getUserData(){
    return this.logoutUsecase.getAll();
  
  }
}

export {DashboardViewModel}

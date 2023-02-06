import { Inject, Injectable } from "@angular/core";
import { AuthRepository } from "../../domain/repository/auth.repository";
import { BaseViewModel } from "../core/base.viewmodel";
import { BaseAction } from "../core/intent";
import { GoToDashboardEffect, OnEmailChangeAction, OnPasswordChangeAction, OnSignInClickAction, ShowLoginErrorEffect, SigninState } from "./signin.intent";

@Injectable()
class SigninViewModel extends BaseViewModel<SigninState> {

  initialState(): SigninState {
    return {
      email: "",
      emailError: '',
      password: "",
      passwordError: "",
      isLoading: false
    };
  }

  constructor(@Inject('AuthRepository') private readonly authRepository: AuthRepository) { super(); }

  handleAction(baseAction: BaseAction, state: SigninState) {
    if(baseAction instanceof OnEmailChangeAction) {
      this.handleEmailChange(baseAction.data, state);
    } else if(baseAction instanceof OnPasswordChangeAction) {
      this.handlePasswordChange(baseAction.data, state);
    } else if(baseAction instanceof OnSignInClickAction) {
      this.performSignIn(state);
    }
  }

  private handleEmailChange(email: string, state: SigninState) {
    state.email = email;
    this.setState(state);
  }

  private handlePasswordChange(password: string, state: SigninState) {
    state.password = password;
    this.setState(state);
  }

  private async performSignIn(state: SigninState) {

      if(this.validate(state)) {
        const { email, password } = state;
        try {
          this.showLoading(state);
          await this.authRepository.signin(email, password);
          this.setEffect(new GoToDashboardEffect());
        } catch (error) {
          this.setEffect(new ShowLoginErrorEffect((error as Error).message));
        } finally {
          this.hideLoading(state);
        }
      }
  }

  validate(state: SigninState) {
    return this.isEmailValid(state) && this.isPasswordValid(state);
  }
  isPasswordValid(state: SigninState): boolean {
   const validLength = state.password.length >= 8 && state.password.length <= 16;
   if(validLength) {
    state.passwordError = "";
    this.setState(state);
   } else {
    state.passwordError = "Please enter password between 8-16 characters";
    this.setState(state);
   }
   console.log(validLength);
   
   return validLength;
  }

  isEmailValid(state: SigninState): boolean {
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const result = regex.test(state.email); 
    if(result) {
      state.emailError = "";
      this.setState(state);
    } else {
      state.emailError = "Please enter valid email";
      this.setState(state);
    }
    return result;
  }



  private showLoading(state: SigninState) {
    state.isLoading = true;
    this.setState(state);
  }

  private hideLoading(state: SigninState) {
    state.isLoading = false;
    this.setState(state);
  }
}

export {SigninViewModel}

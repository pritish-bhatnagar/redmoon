import { BaseAction, BaseEffect, BaseState, ParameterizedAction, ParameterizedEffect } from "../core/intent";

// Actions
class OnEmailChangeAction extends ParameterizedAction<string> {
  constructor(public email: string){ super('OnEmailChangeAction', email);}
}

class OnPasswordChangeAction extends ParameterizedAction<string> {
  constructor(public password: string){ super('OnPasswordChangeAction', password);}
}

class OnSignInClickAction implements BaseAction {
  constructor(public actionName: string = 'OnSignInClickAction') { }
}

// State
interface SigninState extends BaseState {
  email: string;
  emailError: string;
  password: string;
  passwordError: string;
  isLoading: boolean;
}

// Effect
class GoToDashboardEffect implements BaseEffect{
  constructor(public effectName: string = "GoToDashboardEffect") {}
}

class ShowLoginErrorEffect extends ParameterizedEffect<string> {
  constructor(message: string) { super('ShowLoginErrorEffect', message);}
}

export type {SigninState}
export {OnEmailChangeAction, OnPasswordChangeAction, OnSignInClickAction, GoToDashboardEffect, ShowLoginErrorEffect}

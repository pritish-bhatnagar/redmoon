import { BehaviorSubject } from "rxjs";
import { BaseAction, BaseEffect, BaseState } from "./intent";

abstract class BaseViewModel<T extends BaseState> {

  abstract initialState() : T

  private stateSubject = new BehaviorSubject<T>(this.initialState());
  public stateObservable = this.stateSubject.asObservable();

  private effectSubject = new BehaviorSubject<BaseEffect | null>(null);
  public effectObservable = this.effectSubject.asObservable();

  setAction(baseAction: BaseAction) {
    this.handleAction(baseAction, {...this.stateSubject.value})
  }

  setState(newState: T) {
    this.stateSubject.next(newState);
  }

  setEffect(effect: BaseEffect) {
    this.effectSubject.next(effect);
  }

  abstract handleAction(baseAction: BaseAction, state: T): void;
}

export {BaseViewModel}

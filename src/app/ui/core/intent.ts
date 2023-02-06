// Action
interface BaseAction {
  actionName: string
}

class ParameterizedAction<T> implements BaseAction {
  constructor(public actionName: string, public data: T) { }
}

// State
interface BaseState {}

// Effect
interface BaseEffect {
  effectName: string;
}

class ParameterizedEffect<T> implements BaseEffect {
  constructor(public effectName: string, public data: T) { }
}

export {ParameterizedAction, ParameterizedEffect}
export type {BaseAction, BaseEffect, BaseState}

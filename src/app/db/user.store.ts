import { Injectable } from "@angular/core";
import { Entity } from "./entity";
import { Store } from "./store";

interface UserEntity extends Entity {
  firstName: string;
  lastName: string;
  email: string;
  isActived: boolean;
}

@Injectable({providedIn: 'root'})
class UserStore extends Store<UserEntity>{}

export {UserStore}
export type {UserEntity}

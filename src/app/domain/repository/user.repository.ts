import { Subscription } from "rxjs";
import { User } from "../model/user.model";

interface UserRepository {
  getUserData():Promise<object>
  getAll(): Promise<User[]>
  logout(): Promise<void>
}

export type {UserRepository}

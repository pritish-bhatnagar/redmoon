import { Subscription } from "rxjs";
import { FResult } from "../model/user-data.model";
import { User } from "../model/user.model";

interface UserRepository {
  getUserData():Promise<FResult[]>
  getAll(): Promise<User[]>
  logout(): Promise<void>
}

export type {UserRepository}

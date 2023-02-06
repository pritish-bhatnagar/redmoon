interface AuthRepository {
  signin(email: string, password: string): Promise<void>
  logout(): Promise<void>
}

export type { AuthRepository }

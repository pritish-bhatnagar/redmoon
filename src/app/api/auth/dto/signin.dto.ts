type SignInRequest = {
  email: string;
  password: string;
}

type SignInResponse = {
  token: string;
}

export {SignInRequest, SignInResponse}

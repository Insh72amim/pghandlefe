export interface ISignUpRequestDto {
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
}

export interface ISignInRequestDto {
  email: string;
  password: string;
}

export interface IVerifyTokenRequest {
  access_token: string | null;
}

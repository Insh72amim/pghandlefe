export interface ISignUpResponseDto {
  id: string;
  pgs: Array<string>;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
}

export interface ISignInResponseDto {
  id: string;
  pgs: Array<string>;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  password: string;
  address: string;
  mobileNumber: string;
  access_token: string;
}

export interface IVerifyTokenResponse {
  valid: boolean;
  decoded: {
    sub: string;
    name: string;
    email: string;
    iat: number;
    exp: number;
  };
}

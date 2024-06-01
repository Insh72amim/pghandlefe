import {
  ISignInRequestDto,
  ISignUpRequestDto,
  IVerifyTokenRequest,
} from '../types/request.dto';
import {
  ISignInResponseDto,
  ISignUpResponseDto,
  IVerifyTokenResponse,
} from '../types/response.dto';
import { apiClient } from './apiclient';

export const signUp = async (
  body: ISignUpRequestDto,
): Promise<ISignUpResponseDto> => {
  try {
    const response = await apiClient.post('/v1/auth/signup', body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (
  body: ISignInRequestDto,
): Promise<ISignInResponseDto> => {
  try {
    const response = await apiClient.post('/v1/auth/signin', body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyToken = async (
  body: IVerifyTokenRequest,
): Promise<IVerifyTokenResponse> => {
  try {
    const response = await apiClient.post('/v1/auth/verify', body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

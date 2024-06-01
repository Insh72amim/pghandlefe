import { verifyToken } from '../apis/auth.api';

export const getUserId = async () => {
  const token = await verifyToken({
    access_token: localStorage.getItem('access_token'),
  });
  return token.decoded.sub;
};

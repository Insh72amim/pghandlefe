import { Pg } from '../types/PG';
import { apiClient } from './apiclient';

export const getPGListByOwnerId = async (ownerId: string) => {
  try {
    const response = await apiClient.get(`/v1/owner/${ownerId}/pg`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBedsInPgByPgId = async (
  pgId: string,
  available: boolean = false,
) => {
  try {
    let route = `/v1/pg/${pgId}/beds`;
    if (available) route += '?available=true';
    const response = await apiClient.get(route);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addPg = async (data: Pg) => {
  try {
    const response = await apiClient.post('/v1/pg', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPGById = async (pgId: string) => {
  try {
    const response = await apiClient.get(`/v1/pg/${pgId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

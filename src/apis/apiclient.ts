import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:5647',
  withCredentials: true,
});

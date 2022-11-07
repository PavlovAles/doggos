import axios from 'axios';
import { TRes, TUser } from '../types/user';

export const signup = (user: TUser) => {
  return axios.post<TRes>('/api/signup', user);
};

export const signin = (user: TUser) => {
  return axios.post<TRes>('/api/signin', user);
};
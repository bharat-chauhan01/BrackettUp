import { get, post } from './ApiHandler';
import { BackendUnreachableError } from '../utils/utils';

const dummyUser = {
  name: 'SuperUser',
  credits: 100,
  reservations: 10,
};

export const fetchProfile = async () => {
  try {
    const response = await get('/profile');
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return dummyUser;
    }
    throw error;
  }
};

export const logout = async() => {
  try {
    return await post('/logout', null);
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return {};
    }
    throw error;
  }
};

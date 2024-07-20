import axios from 'axios';
import { constant } from './constant';
import { BackendUnreachableError } from '../utils/utils';

const apiClient = axios.create({
  baseURL: constant.baseUrl,
  headers: {
    authToken: 'your-auth-token-here',
  },
});

export const get = path => {
  return apiClient
    .get(path)
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.log('Non2xx: Error while calling path', path, error);
        throw new Error(constant.error.backendUnreachableErrorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('Unreachable: Error while calling path', path, error);
        throw new BackendUnreachableError();
      } else if (error.code === 'ECONNABORTED') {
        // The request took longer than the timeout set
        console.log('ECONNABORTED: Error while calling path', path, error);
        throw new Error(constant.error.backendUnreachableErrorMessage);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Unknown: Error while calling path', path, error);
        throw new Error(constant.error.networkErrorMessage);
      }
    });
};

export const post = (path, data) => {
  return apiClient
    .post(path, data)
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.log('Non2xx: Error while calling path', path, error);
        throw new Error(constant.error.backendUnreachableErrorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('Unreachable: Error while calling path', path, error);
        throw new BackendUnreachableError();
      } else if (error.code === 'ECONNABORTED') {
        // The request took longer than the timeout set
        console.log('ECONNABORTED: Error while calling path', path, error);
        throw new Error(constant.error.backendUnreachableErrorMessage);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Unknown: Error while calling path', path, error);
        throw new Error(constant.error.networkErrorMessage);
      }
    });
};
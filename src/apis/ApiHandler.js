import axios from 'axios';
import { constant } from './constant';
import { BackendUnreachableError } from '../utils/utils';
import { getItem } from '../store/LocalStorage';

const createApiClient = async () => {
  const authData = await getItem('auth');
  return axios.create({
    baseURL: constant.baseUrl,
    headers: {
      'authToken': authData?.authToken || '',
      'Content-Type': 'application/json',
    },
  });
};

const logCurlCommand = (method, url, headers, data) => {
  const headersString = Object.entries(headers)
    .map(([key, value]) => `-H "${key}: ${value}"`)
    .join(' ');

  const dataString = data ? `-d '${JSON.stringify(data)}'` : '';

  console.log(`curl -X ${method.toUpperCase()} ${headersString} ${dataString} ${url}`);
};

export const get = async path => {
  const apiClient = await createApiClient();

  return apiClient
    .get(path)
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        console.log('Non2xx: Error while calling path', path, error);
        throw new BackendUnreachableError();
      } else if (error.request) {
        console.log('Unreachable: Error while calling path', path, error);
        throw new BackendUnreachableError();
      } else if (error.code === 'ECONNABORTED') {
        console.log('ECONNABORTED: Error while calling path', path, error);
        throw new Error(constant.error.backendUnreachableErrorMessage);
      } else {
        console.log('Unknown: Error while calling path', path, error);
        throw new Error(constant.error.networkErrorMessage);
      }
    });
};

export const post = async (path, data) => {
  const apiClient = await createApiClient();

  // Log the full cURL command
  //logCurlCommand('post', `${constant.baseUrl}${path}`, apiClient.defaults.headers, data);

  return apiClient
    .post(path, data)
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        console.log('Non2xx: Error while calling path', path, error);
        throw new Error(
          error.response.data?.message || 'An error occurred while processing the request.',
        );
      } else if (error.request) {
        console.log('Unreachable: Error while calling path', path, data, error);
        throw new BackendUnreachableError();
      } else if (error.code === 'ECONNABORTED') {
        console.log('ECONNABORTED: Error while calling path', path, error);
        throw new Error(constant.error.backendUnreachableErrorMessage);
      } else {
        console.log('Unknown: Error while calling path', path, error);
        throw new Error(constant.error.networkErrorMessage);
      }
    });
};

export const put = async (path, data) => {
  const apiClient = await createApiClient();

  // Log the full cURL command
  //logCurlCommand('put', `${constant.baseUrl}${path}`, apiClient.defaults.headers, data);

  return apiClient
    .put(path, data)
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        console.log('Non2xx: Error while calling path', path, error);
        throw new Error(
          error.response.data?.message || 'An error occurred while processing the request.',
        );
      } else if (error.request) {
        console.log('Unreachable: Error while calling path', path, data, error);
        throw new BackendUnreachableError();
      } else if (error.code === 'ECONNABORTED') {
        console.log('ECONNABORTED: Error while calling path', path, error);
        throw new Error(constant.error.backendUnreachableErrorMessage);
      } else {
        console.log('Unknown: Error while calling path', path, error);
        throw new Error(constant.error.networkErrorMessage);
      }
    });
};

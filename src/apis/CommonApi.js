import { BackendUnreachableError } from '../utils/utils';
import { get, post, put } from './ApiHandler';
import { placesMock, creditPackagesMock, accountBalanceMock } from './MockData';

export const fetchHomePageActivities = async () => {
  try {
    const response = await get(`/relevance/home`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchActivitySchedule = async activityId => {
  try {
    const response = await get('/class/activity/schedule/' + activityId);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchOrganizationSchedule = async activityId => {
  try {
    const response = await get('/class/organization/schedule/' + activityId);
    return response;
  } catch (error) {
    throw error;
  }
};

export const searchedResults = async data => {
  try {
    const response = await post('/relevance/search', data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getNearByPlaces = async searchText => {
  try {
    const response = await get('places?searchText=' + searchText);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return placesMock;
    }
    throw error;
  }
};

export const searchSuggestions = async searchText => {
  try {
    const response = await get('/relevance/search/suggestions?searchText=' + searchText);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchActivityDetail = async id => {
  try {
    const response = await get(`/class/activity/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchSearchLandingSuggestions = async (latitute, longitude) => {
  try {
    const response = await get('relevance/search/home');
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchPortfolioDetail = async id => {
  try {
    const response = await get(`/portfolio/organization/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchCreditPackages = async () => {
  try {
    const response = await get('/credits/packages');
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return creditPackagesMock;
    }
    throw error;
  }
};

export const fetchAccountBalance = async () => {
  try {
    const response = await get('/account/balance');
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return accountBalanceMock.balance;
    }
    throw error;
  }
};

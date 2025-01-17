import { BackendUnreachableError } from '../utils/utils';
import { get, post } from './ApiHandler';
import { placesMock, accountBalanceMock } from './MockData';

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

export const fetchOrganizationSchedule = async organizationId => {
  try {
    const response = await get('/class/organization/schedule/' + organizationId);
    return response;
  } catch (error) {
    throw error;
  }
};

export const searchedResults = async data => {
  try {
    console.log(data);
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
    const response = await get('/credits/package');
    return response;
  } catch (error) {
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

export const fetchExtraHomeScreenActivities = async (offset, limit) => {
  try {
    const response = await get('/relevance/home/extra?offset=' + offset + '&limit=' + limit);
    return response;
  } catch (error) {
    throw error;
  }
};

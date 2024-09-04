import { BackendUnreachableError } from '../utils/utils';
import { get, post } from './ApiHandler';
import {
  categoriesMock,
  placesMock,
  reservationMock,
  scheduleMock,
  searchMock,
  searchModalsData,
  activityDataMock,
  activitiesMock,
  upcomingActivitiesMock,
  homeSearch,
  accountMockData,
  portfolioDataMock,
  activityReviewDataMock,
} from './MockData';

export const fetchProfile = async () => {
  try {
    const response = await get('/user/profile');
    return response;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    return await post('/logout', null);
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return {};
    }
    throw error;
  }
};

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
    const response = await get('activity/' + activityId + '/schedule', null);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return scheduleMock;
    }
    throw error;
  }
};

export const fetchUpcomingPageActivities = async () => {
  try {
    const response = await get(`/class/reservations/upcoming`);
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

export const fetchReservation = async () => {
  try {
    const response = await get(`/class/reservations/past`);
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

export const fetchAccountData = async () => {
  try {
    const response = await get(`/account`);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return accountData;
    }
    throw error;
  }
};
let accountData = { ...accountMockData };
export const saveAccountData = async data => {
  try {
    const response = await post(`/account`, data);
    return response;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      accountData = { ...accountData, ...data };
      return accountData;
    }
    throw error;
  }
};

export const requestPhoneOtp = async phone => {
  try {
    return await post('/mobile/otp/request', { phone });
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return {};
    }
    throw error;
  }
};

export const requestEmailOtp = async email => {
  try {
    return await post('/email/otp/request', { email });
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return {};
    }
    throw error;
  }
};

export const validatePhoneOtp = async (oldPhone, newPhone, otp) => {
  try {
    await post('/mobile/otp/validate', { oldPhone, newPhone, otp });
  } catch (error) {
    if (otp != '0000') {
      throw new Error('Please Enter 0000 for validation');
    }
    if (error instanceof BackendUnreachableError) {
      return 'Success';
    }
    throw error;
  }
};

export const validateEmailOtp = async (oldEmail, newEmail, otp) => {
  try {
    await post('/email/otp/validate', { oldEmail, newEmail, otp });
  } catch (error) {
    if (otp != '0000') {
      throw new Error('Please Enter 0000 for validation');
    }
    if (error instanceof BackendUnreachableError) {
      return 'Success';
    }
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

export const confirmResevation = async (classId) => {
  try {
    await post('/class/reservations/schedule', { classId });
  } catch (error) {
    throw error;
  }
};

export const fetchReviewDetail = async id => {
  try {
    const response = await get(`/reviews/activity/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      const mockData = activityReviewDataMock.find(activity => activity.activityId === id);
      return mockData ? mockData : {};
    }
    throw error;
  }
};

export const submitFeedback = async (activityId, rating, reviewText) => {
  try {
    await post('/activityId/rating/reviewText', { activityId, rating, reviewText });
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return 'Success';
    }
    throw error;
  }
};


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
  activityReviewDataMock
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
    const response = await get(`/activities`);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return activitiesMock;
    }
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
    const response = await get(`/activities/upcoming`);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return upcomingActivitiesMock;
    }
    throw error;
  }
};

export const searchedResults = async data => {
  try {
    const response = await post('/search', data);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return searchModalsData;
    }
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
    const response = await get('/activitySuggestions?searchText=' + searchText);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return searchMock;
    }
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await get('/categories');
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return categoriesMock;
    }
    throw error;
  }
};

export const fetchActivityDetail = async id => {
  try {
    const response = await get(`/activity/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      const mockData = activityDataMock.find(activity => activity.activityId === id);
      return mockData ? mockData : {};
    }
    throw error;
  }
};

export const fetchReservation = async () => {
  try {
    const response = await get(`/reservation`);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return reservationMock;
    }
    throw error;
  }
};

export const fetchSearchLandingSuggestions = async (latitute, longitude) => {
  try {
    const response = await get(`/home/search?latitute=` + latitute + '&longitude=' + longitude);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return homeSearch;
    }
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
    const response = await get(`/organization/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      const mockData = portfolioDataMock.find(activity => activity.organizationId === id);
      return mockData ? mockData : {};
    }
    throw error;
  }
};

export const confirmResevation = async (activityId, credits) => {
  try {
    await post('/activityClass/confirm', { credits, activityId });
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return 'Success';
    }
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
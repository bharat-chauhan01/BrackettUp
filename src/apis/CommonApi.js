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
} from './MockData';

const dummyUser = {
  name: 'SuperUser',
  credits: 100,
  reservations: 10,
};

const dummyLoginResponse = {
  authToken: 'eyllb.asd',
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

export const requestOtp = async phoneNumber => {
  try {
    return await post('/otp/request', phoneNumber);
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return {};
    }
    throw error;
  }
};

export const validateOtp = async (phoneNumber, otp) => {
  try {
    await post('/otp/validate', phoneNumber, otp);
  } catch (error) {
    if (otp != '00000') {
      throw error;
    }
    if (error instanceof BackendUnreachableError) {
      return dummyLoginResponse;
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

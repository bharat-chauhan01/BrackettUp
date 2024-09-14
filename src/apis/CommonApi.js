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

export const mockExtraHome = [
  {
    activityName: 'Yoga Class',
    distance: '2.5km',
    organisation: 'Wellness Studio',
    rating: 4.7,
    categories: ['Fitness', 'Wellness', 'Yoga'],
    credits: '15',
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 150,
    ratingDesc: 'Excellent',
    discountCredits: '5 Credits',
  },
  {
    activityName: 'Cooking Workshop',
    distance: '1.2km',
    organisation: "Chef's Kitchen",
    rating: 4.5,
    categories: ['Cooking', 'Workshop', 'Culinary'],
    credits: 20,
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 80,
    ratingDesc: 'Very Good',
    discountCredits: 3,
  },
  {
    activityName: 'Art Painting Class',
    distance: '3.1 km',
    organisation: 'Creative Arts Studio',
    rating: 4.9,
    categories: ['Art', 'Painting', 'Creativity'],
    credits: 25,
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 200,
    ratingDesc: 'Outstanding',
    discountCredits: 7,
  },
  {
    activityName: 'Pilates Session',
    distance: '4.0 km',
    organisation: 'Fitness Pro',
    rating: 4.6,
    categories: ['Fitness', 'Pilates', 'Health'],
    credits: 18,
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 110,
    ratingDesc: 'Great',
    discountCredits: 4,
  },
  {
    activityName: 'Yoga Class',
    distance: '2.5 km',
    organisation: 'Wellness Studio',
    rating: 4.7,
    categories: ['Fitness', 'Wellness', 'Yoga'],
    credits: 15,
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 150,
    ratingDesc: 'Excellent',
    discountCredits: 5,
  },
  {
    activityName: 'Cooking Workshop',
    distance: '1.2 km',
    organisation: "Chef's Kitchen",
    rating: 4.5,
    categories: ['Cooking', 'Workshop', 'Culinary'],
    credits: 20,
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 80,
    ratingDesc: 'Very Good',
    discountCredits: 3,
  },
  {
    activityName: 'Art Painting Class',
    distance: '3.1 km',
    organisation: 'Creative Arts Studio',
    rating: 4.9,
    categories: ['Art', 'Painting', 'Creativity'],
    credits: 25,
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 200,
    ratingDesc: 'Outstanding',
    discountCredits: 7,
  },
  {
    activityName: 'Pilates Session',
    distance: '4.0 km',
    organisation: 'Fitness Pro',
    rating: 4.6,
    categories: ['Fitness', 'Pilates', 'Health'],
    credits: 18,
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 110,
    ratingDesc: 'Great',
    discountCredits: 4,
  },
  {
    activityName: 'Yoga Class',
    distance: '2.5 km',
    organisation: 'Wellness Studio',
    rating: 4.7,
    categories: ['Fitness', 'Wellness', 'Yoga'],
    credits: 15,
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 150,
    ratingDesc: 'Excellent',
    discountCredits: 5,
  },
  {
    activityName: 'Cooking Workshop',
    distance: '1.2 km',
    organisation: "Chef's Kitchen",
    rating: 4.5,
    categories: ['Cooking', 'Workshop', 'Culinary'],
    credits: 20,
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 80,
    ratingDesc: 'Very Good',
    discountCredits: 3,
  },
  {
    activityName: 'Art Painting Class',
    distance: '3.1 km',
    organisation: 'Creative Arts Studio',
    rating: 4.9,
    categories: ['Art', 'Painting', 'Creativity'],
    credits: 25,
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 200,
    ratingDesc: 'Outstanding',
    discountCredits: 7,
  },
  {
    activityName: 'Pilates Session',
    distance: '4.0 km',
    organisation: 'Fitness Pro',
    rating: 4.6,
    categories: ['Fitness', 'Pilates', 'Health'],
    credits: 18,
    imageSource:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
    ratingCount: 110,
    ratingDesc: 'Great',
    discountCredits: 4,
  },
];

export const fetchExtraHomeScreenActivities = async (offset, limit) => {
  try {
    console.log(offset, limit);
    const response = await get('/relevance/home/extra?offset=' + offset + '&limit=' + limit);
    return response;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return mockExtraHome;
    }
    throw error;
  }
};

import { BackendUnreachableError } from '../utils/utils';
import { validateMobileNumber } from '../validator/MobileValidator';
import { get, post } from './ApiHandler';

const dummyUser = {
  name: 'SuperUser',
  credits: 100,
  reservations: 10,
};

const dummyLoginResponse = {
  authToken: 'eyllb.asd',
};

const activitiesMock = [
  {
    key: 'Trending now',
    content: [
      {
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
        title: 'Rocycle',
        subtitle: 'Zuidas · ',
        distance: '0.6 km',
        activity: 'Cycling',
        rating: '4.7',
        ratingCount: '(30000+)',
        ratingDesc: 'Excellent',
      },
      {
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
        title: 'ClubSportive',
        subtitle: 'Zuidas · ',
        distance: '0.5 km',
        activity: 'Gym Time',
        rating: '4.7 ',
        ratingCount: '(30000+)',
        ratingDesc: 'Great',
      },
      {
        imageUrl:
          'https://media.istockphoto.com/id/1483989758/photo/diverse-yoga-class-participants-doing-a-side-plank-on-their-yoga-mats-in-a-beautiful-yoga.jpg?s=1024x1024&w=is&k=20&c=EQE_TpZPMPPkjtW94XIqXxSBW69EZ4c-b2rhOmUcUcY=',
        title: 'YogaSpot',
        subtitle: 'Buitenveldert · ',
        distance: '0.6 km',
        activity: 'Yoga',
        rating: '4.5',
        ratingCount: '(20000+)',
        ratingDesc: 'Great',
      },
      {
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
        title: 'ClubSportive',
        subtitle: 'Zuidas · ',
        distance: '0.5 km',
        activity: 'Gym Time',
        rating: '4.7 ',
        ratingCount: '(30000+)',
        ratingDesc: 'Great',
      },
    ],
  },
  {
    key: 'Studios Near You',
    content: [
      {
        imageUrl:
          'https://media.istockphoto.com/id/1483989758/photo/diverse-yoga-class-participants-doing-a-side-plank-on-their-yoga-mats-in-a-beautiful-yoga.jpg?s=1024x1024&w=is&k=20&c=EQE_TpZPMPPkjtW94XIqXxSBW69EZ4c-b2rhOmUcUcY=',
        title: 'YogaSpot',
        subtitle: 'Buitenveldert · ',
        distance: '0.6 km',
        activity: 'Yoga',
        rating: '4.5',
        ratingCount: '(20000+)',
        ratingDesc: 'Great',
      },
      {
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
        title: 'Rocycle',
        subtitle: 'Zuidas · ',
        distance: '0.6 km',
        activity: 'Cycling',
        rating: '4.7',
        ratingCount: '(30000+)',
        ratingDesc: 'Excellent',
      },
      {
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
        title: 'ClubSportive',
        subtitle: 'Zuidas · ',
        distance: '0.5 km',
        activity: 'Gym Time',
        rating: '4.7 ',
        ratingCount: '(30000+)',
        ratingDesc: 'Great',
      },
    ],
  },
  {
    key: "See what's new on BrackettUp",
    content: [
      {
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
        title: 'ClubSportive',
        subtitle: 'Zuidas · ',
        distance: '0.5 km',
        activity: 'Gym Time',
        rating: '4.7 ',
        ratingCount: '(30000+)',
        ratingDesc: 'Great',
      },
      {
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
        title: 'Rocycle',
        subtitle: 'Zuidas · ',
        distance: '0.6 km',
        activity: 'Cycling',
        rating: '4.7',
        ratingCount: '(30000+)',
        ratingDesc: 'Excellent',
      },
      {
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
        title: 'ClubSportive',
        subtitle: 'Zuidas · ',
        distance: '0.5 km',
        activity: 'Gym Time',
        rating: '4.7 ',
        ratingCount: '(30000+)',
        ratingDesc: 'Great',
      },
    ],
  },
];
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

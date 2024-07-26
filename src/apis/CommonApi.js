import { BackendUnreachableError } from '../utils/utils';
import { validateMobileNumber } from '../validator/MobileValidator';
import { get, post } from './ApiHandler';
import { scheduleMock } from './MockData';

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
          'https://media.istockphoto.com/id/1483989758/photo/diverse-yoga-class-participants-doing-a-instructor-plank-on-their-yoga-mats-in-a-beautiful-yoga.jpg?s=1024x1024&w=is&k=20&c=EQE_TpZPMPPkjtW94XIqXxSBW69EZ4c-b2rhOmUcUcY=',
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
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
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

const upcomingaAtivitiesMock = [
  {
    title: 'Haircut (Regular)',
    date: '2024-07-24',
    time: '10:00 AM - 12:00 PM',
    instructor: 'Dan Rose',
    institution: 'Fit Club',
    imageUrl:
      'https://t3.ftcdn.net/jpg/04/49/73/64/360_F_449736488_IAGo58o7DloC8Os5S5v9vppX3BIxzK4S.jpg',
    activityImageUrl:
      'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.webp',
  },
  {
    title: 'Yoga Session',
    date: '2024-07-25',
    time: '08:00 AM - 09:00 AM',
    instructor: 'Jane Doe',
    institution: 'Wellness Center',
    activityImageUrl:
      'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  },
  {
    title: 'Swimming Class',
    date: '2024-07-23',
    time: '02:00 PM - 04:00 PM',
    instructor: 'John Smith',
    institution: 'Swim School',
    activityImageUrl:
      'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.webp',
  },
  {
    title: 'Yoga Class',
    date: '2024-07-26',
    time: '06:00 PM - 07:00 PM',
    instructor: 'Emily Clark',
    institution: 'Yoga Academy',
    activityImageUrl:
      'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
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
      return upcomingaAtivitiesMock;
    }
    throw error;
  }
};

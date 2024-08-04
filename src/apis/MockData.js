export const scheduleMock = [
  {
    title: '2024-07-20',
    data: [
      {
        hour: '12:00 am',
        duration: '50 min',
        title: 'First Yoga',
        originalPrice: 2,
        instructor: 'Kevin Owens',
        booked: true,
      },
    ],
  },
  {
    title: '2024-07-21',
    data: [
      {
        hour: '4:00 pm',
        duration: '50 min',
        title: 'Pilates ABC',
        originalPrice: 2,
        discountedPrice: null,
        instructor: 'Tommy Owens',
        booked: true,
      },
      {
        hour: '5:00 pm',
        duration: '50 min',
        title: 'Vinyasa Yoga',
        originalPrice: 20,
        discountedPrice: 1,
        instructor: 'Gennady Owens',
      },
    ],
  },
  {
    title: '2024-07-23',
    data: [
      {
        hour: '1:00 pm',
        duration: '50 min',
        title: 'Ashtanga Yoga',
        originalPrice: 2,
        discountedPrice: 1,
      },
      {
        hour: '2:00 pm',
        duration: '50 min',
        title: 'Deep Stretches',
        originalPrice: 2,
        discountedPrice: 1,
      },
      {
        hour: '3:00 pm',
        duration: '50 min',
        title: 'Private Yoga',
        originalPrice: 10,
        discountedPrice: 1,
        booked: true,
      },
    ],
  },
  {
    title: '2024-07-25',
    data: [
      {
        hour: '12:00 am',
        duration: '50 min',
        title: 'Ashtanga Yoga',
        originalPrice: 10,
        discountedPrice: 1,
      },
    ],
  },
  {
    title: '2024-07-29',
    data: [{}],
  },
  {
    title: '2024-07-31',
    data: [
      { hour: '9:00 pm', duration: '50 min', title: 'Middle Yoga' },
      { hour: '10:00 pm', duration: '50 min', title: 'Ashtanga' },
      { hour: '11:00 pm', duration: '50 min', title: 'TRX' },
      { hour: '12:00 pm', duration: '50 min', title: 'Running Group' },
    ],
  },
  {
    title: '2024-08-03',
    data: [{ hour: '12:00 am', duration: '50 min', title: 'Ashtanga Yoga' }],
  },
];

export const searchModalsData = [
  {
    activityName: 'Yoga Session',
    distance: '5 km',
    organisation: 'John Doe',
    rating: 4.5,
    categories: ['Health', 'Fitness'],
    time: ['10:00 AM', '11:00 AM', '10:00 AM', '11:00 AM'],
    credits: '2 credits',
    imageSource: {
      uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
    },
    ratingCount: '400',
    ratingDesc: 'Great',
  },
  {
    activityName: 'Pilates Class',
    distance: '3 km',
    organisation: 'Jane Smith',
    rating: 4.0,
    categories: ['Health', 'Wellness'],
    time: ['10:00 AM', '11:00 AM'],
    credits: '3 credits',
    imageSource: {
      uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
    },
    ratingCount: '300+',
    ratingDesc: 'Excellent',
  },
  {
    activityName: 'Yoga Session',
    distance: '5 km',
    organisation: 'John Doe',
    rating: 4.5,
    categories: ['Health', 'Fitness'],
    time: ['10:00 AM', '11:00 AM'],
    credits: '2 credits',
    ratingCount: '500',
    ratingDesc: 'Super',
    imageSource: {
      uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
    },
  },
  {
    activityName: 'Pilates Class',
    distance: '3 km',
    organisation: 'Jane Smith',
    rating: 4.0,
    categories: ['Health', 'Wellness'],
    time: ['10:00 AM', '11:00 AM'],
    ratingCount: '50',
    ratingDesc: 'Super',
    credits: '3 credits',
    imageSource: {
      uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
    },
  },
  {
    activityName: 'Yoga Session',
    distance: '5 km',
    organisation: 'John Doe',
    rating: 4.5,
    categories: ['Health', 'Fitness'],
    time: ['10:00 AM', '11:00 AM'],
    ratingCount: '50',
    ratingDesc: 'Super',
    credits: '2 credits',
    imageSource: {
      uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
    },
  },
  {
    activityName: 'Pilates Class',
    distance: '3 km',
    organisation: 'Jane Smith',
    rating: 4.0,
    categories: ['Health', 'Wellness'],
    time: ['10:00 AM', '11:00 AM'],
    ratingCount: '50',
    ratingDesc: 'Super',
    credits: '3 credits',
    imageSource: {
      uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
    },
  },
  // Add more data objects as needed
];

export const placesMock = [
  {
    name: 'akshardham',
    location: {
      lat: '123.2',
      long: '123.2',
    },
  },
  {
    name: 'mayur vihar',
    location: {
      lat: '',
      long: '',
    },
  },
  {
    name: 'anand vihar',
    location: {
      lat: '',
      long: '',
    },
  },
  {
    name: 'dwarka',
    location: {
      lat: '',
      long: '',
    },
  },
  {
    name: 'connaught palace',
    location: {
      lat: '',
      long: '',
    },
  },
  {
    name: 'paschim vihar',
    location: {
      lat: '',
      long: '',
    },
  },
];

export const searchMock = [
  {
    name: 'Boxing',
    ref_id: '9d834d1a-e9f4-4784-894a-66e0a98f9d2f',
    ref_type: 'activity',
  },
  {
    name: 'iron pumper gym',
    ref_id: '479d94d1-098c-4b7d-bc1c-438c8c87a367',
    ref_type: 'institution',
  },
  {
    name: 'yoga',
    ref_id: 'e9785413-e442-414e-a58d-a58c0f2c35d3',
    ref_type: 'institution',
  },
  {
    name: 'swimming',
    ref_id: 'e9785413-e442-414e-a58d-a58c0f2c35d3',
    ref_type: 'activity',
  },
  {
    name: 'dance',
    ref_id: 'e9785413-e442-414e-a58d-a58c0f2c35d3',
    ref_type: 'institution',
  },
  {
    name: 'shuffle dance',
    ref_id: 'e9785413-e442-414e-a58d-a58c0f2c35d3',
    ref_type: 'institution',
  },
];

export const categoriesMock = [
  {
    name: 'Boxing',
    id: '1',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '2',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '3',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '4',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '5',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '6',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '7',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '8',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '9',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '10',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '11',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '12',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
  {
    name: 'Boxing',
    id: '13',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
    imageUrl:
      'https://media.istockphoto.com/id/2149222806/nl/foto/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=PHssWY9RQq8sLWDXZw95ObaLZtl7GjkN4vo22_ByWsw=',
  },
];


export const saveData = [
  {
    id: '1',
    name: 'Chasse Dance Studio',
    distance: '4.1km',
    rating: { value: '4.8', count: '(20,000+)', description: 'Excellent' },
    imageUrl:
      'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ktcv2zxh8puczwddeud9.jpg',
  },
  {
    id: '2',
    name: 'The Reformer Club',
    distance: '4.1km',
    rating: { value: '4.9', count: '(20,000+)', description: 'Excellent' },
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.BIEJXgLeS8ZjLi4ts90tEgHaE8&pid=Api&P=0&h=180',
  },
];
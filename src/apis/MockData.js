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
    activityId: 1,
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
    activityId: 1,
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
    activityId: 1,
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
    activityId: 1,
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
    activityId: 1,
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

export const activitiesMock = [
  {
    key: 'Trending now',
    content: [
      {
        referenceId: 1,
        referenceType: 'portfolio',
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
        title: 'Rocycle',
        subtitle: 'Zuidas · ',
        distance: '0.6 km',
        activity: 'Cycling',
        rating: '4.7',
        ratingCount: '(1000+)',
        ratingDesc: 'Excellent',
      },
      {
        referenceId: 2,
        referenceType: 'activity',
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
        title: 'ClubSportive',
        subtitle: 'Zuidas · ',
        distance: '0.5 km',
        activity: 'Gym Time',
        rating: '4.7 ',
        ratingCount: '(1000+)',
        ratingDesc: 'Great',
      },
      {
        referenceId: 2,
        referenceType: 'activity',
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
        title: 'ClubSportive',
        subtitle: 'Zuidas · ',
        distance: '0.5 km',
        activity: 'Gym Time',
        rating: '4.7 ',
        ratingCount: '(1000+)',
        ratingDesc: 'Great',
      },
    ],
  },
  {
    key: 'Studios Near You',
    content: [
      {
        referenceId: 1,
        referenceType: 'activity',
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
        title: 'YogaSpot',
        subtitle: 'Buitenveldert · ',
        distance: '0.6 km',
        activity: 'Yoga',
        rating: '4.5',
        ratingCount: '(1000+)',
        ratingDesc: 'Great',
        time: '45min',
        date: 'Thu, 24 Aug',
        credits: '10',
        discountCredits: '5 credits',
        percentageDiscount: '25%',
      },
      {
        referenceId: 2,
        referenceType: 'activity',
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
        title: 'Rocycle',
        subtitle: 'Zuidas · ',
        distance: '0.6 km',
        activity: 'Cycling',
        rating: '4.7',
        ratingCount: '(1000+)',
        ratingDesc: 'Excellent',
        time: '45min',
        date: 'Thu, 24 Aug',
        credits: '10 credits',
      },
      {
        referenceId: 1,
        referenceType: 'activity',
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
        title: 'ClubSportive',
        subtitle: 'Zuidas · ',
        distance: '0.5 km',
        activity: 'Gym Time',
        rating: '4.7 ',
        ratingCount: '(1000+)',
        ratingDesc: 'Great',
        time: '45min',
        date: 'Thu, 24 Aug',
        credits: '10 credits',
      },
    ],
  },
  {
    key: "See what's new on BrackettUp",
    content: [
      {
        referenceId: 1,
        referenceType: 'activity',
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
        title: 'ClubSportive',
        subtitle: 'Zuidas · ',
        distance: '0.5 km',
        activity: 'Gym Time',
        rating: '4.7 ',
        ratingCount: '(1000+)',
        ratingDesc: 'Great',
      },
      {
        referenceId: 2,
        referenceType: 'activity',
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
        title: 'Rocycle',
        subtitle: 'Zuidas · ',
        distance: '0.6 km',
        activity: 'Cycling',
        rating: '4.7',
        ratingCount: '(1000+)',
        ratingDesc: 'Excellent',
      },
      {
        referenceId: 2,
        referenceType: 'activity',
        imageUrl:
          'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
        title: 'ClubSportive',
        subtitle: 'Zuidas · ',
        distance: '0.5 km',
        activity: 'Gym Time',
        rating: '4.7 ',
        ratingCount: '(1000+)',
        ratingDesc: 'Great',
      },
    ],
  },
];
export const upcomingActivitiesMock = [
  {
    activityId: 1,
    title: 'Haircut (Regular)',
    date: '2024-07-24',
    time: '10:00 AM - 12:00 PM',
    instructorName: 'Dan Rose',
    organizationName: 'Fit Club',
    activityImageUrl:
      'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.webp',
    coordinates: {
      latitude: 123,
      longitude: 234,
    },
  },
  {
    activityId: 2,
    title: 'Yoga Session',
    date: '2024-07-25',
    time: '08:00 AM - 09:00 AM',
    instructorName: 'Jane Doe',
    organizationName: 'Wellness Center',
    activityImageUrl:
      'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    coordinates: {
      latitude: 123,
      longitude: 234,
    },
  },
  {
    activityId: 3,
    title: 'Swimming Class',
    date: '2024-07-23',
    time: '02:00 PM - 04:00 PM',
    instructorName: 'John Smith',
    organizationName: 'Swim School',
    activityImageUrl:
      'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.webp',
    coordinates: {
      latitude: 123,
      longitude: 234,
    },
  },
];

export const activityDataMock = [
  {
    activityId: 1,
    images: [
      {
        id: '1',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
      },
      {
        id: '2',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
      },
      {
        id: '3',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/r1oaybq0ejmylhdy3jv9.jpg',
      },
    ],
    activityName: 'ROCYCLE',
    rating: { value: '4.8', count: '(20,000+)', description: 'Great' },
    organisationName: 'Rose Dan',
    location: 'Zuidas',
    category: 'Yoga',
    time: 'Sat, Jul 13 · 10:00 AM - 10:45 AM',
    classTakenBy: 'Judith',
    classDescription:
      'This is our signature 45 minute indoor Roride. Every class includes the use of cycling shoes and dumbbells.',
    credits: '11',
    cancellationPolicy:
      'Cancel 12 hours in advance to avoid a fee €11.00 late cancellation fee. A missed reservation will result in a €13.00 fee.',
    instagramAccount: 'rocyclestudios',
    websiteUrl: 'classpass.com',
    about:
      'Rocycle makes your workout into a party on a bike! You ride to the music in a candlelit studio and train your upper body with dumbbells. ',
    highlights: ['LGBTQ-friendly'],
    amenities: ['Showers', 'Lockers', 'Towels'],
    mapImage:
      'https://cdn.prod.website-files.com/5e832e12eb7ca02ee9064d42/64d4e4f4803795aef34e644d_maps_img-5.png',
    address: 'Gustav Mahlerlaan 635, 1082 MX',
    city: 'Amsterdam, Amsterdam, 1082 MX',
    howToGetThere: 'RoCycle Zuid is located at Gustav Mahlerlaan 635, 1082 MX Amsterdam',
    updatedDate: 'Provided by Rocycle. Updated on 3/7/2024.',
    safety: ['Ventilation system', 'Extra sanitation'],
    preparation:
      'Double check your booked location! All Rocycle’s workouts include the use of cycling shoes. Make sure to arrive 15 minutes before your class starts...',
  },
  {
    activityId: 2,
    images: [
      {
        id: '1',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
      },
      {
        id: '2',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/r1oaybq0ejmylhdy3jv9.jpg',
      },
      {
        id: '3',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
      },
    ],
    activityName: 'ClubSportive',
    rating: { value: '4.8', count: '(20,000+)', description: 'Excellent' },
    organisationName: 'Alice Smith',
    location: 'Downtown',
    category: 'Yoga',
    time: 'Sun, Jul 14 · 9:00 AM - 10:00 AM',
    classTakenBy: 'Michael',
    classDescription:
      'Join us for an invigorating yoga flow class to start your day right. Suitable for all levels.',
    credits: '10',
    cancellationPolicy:
      'Cancel 8 hours in advance to avoid a fee €10.00 late cancellation fee. A missed reservation will result in a €12.00 fee.',
    instagramAccount: 'rocyclestudios',
    websiteUrl: 'classpass.com',
    about:
      'Experience the best yoga class in town with top-notch instructors and a welcoming community.',
    highlights: ['LGBTQ-friendly'],
    amenities: ['Yoga mats', 'Water'],
    mapImage:
      'https://cdn.prod.website-files.com/5e832e12eb7ca02ee9064d42/64d4e4f4803795aef34e644d_maps_img-5.png',
    address: '123 Yoga St, 1000 AB',
    city: 'New York, NsY, 1000 AB',
    howToGetThere: 'RoCycle Zuid is located at Gustav Mahlerlaan 635, 1082 MX Amsterdam',
    updatedDate: 'Provided by Rocycle. Updated on 3/7/2024.',
    safety: ['Sanitized mats', 'Social distancing'],
    preparation:
      'Please arrive 10 minutes before the class starts. Bring your own water bottle and a towel.',
  },
];

export const reservationMock = [
  {
    id: 1,
    activityName: 'Yoga',
    organisationName: 'Yoga Academy',
    instructor: 'Emily Clark',
    time: '06:00 PM - 07:00 PM',
    date: 'Thu, 24 Aug',
    credits: '10',
    status: 'Approved',
    imageUrl:
      'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  },
  {
    id: 2,
    activityName: 'Yoga',
    organisationName: 'Yoga Academy',
    instructor: 'Emily Clark',
    time: '06:00 PM - 07:00 PM',
    date: 'Thu, 24 Aug',
    credits: '10',
    status: 'Cancelled',
    imageUrl:
      'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  },

  {
    id: 3,
    activityName: 'Yoga',
    organisationName: 'Yoga Academy',
    instructor: 'Emily Clark',
    time: '06:00 PM-07:00 PM',
    date: 'Thu, 24 Aug',
    credits: '10',
    status: 'Approved',
    imageUrl:
      'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  },
  {
    id: 4,
    activityName: 'Yoga',
    organisationName: 'Yoga Academy',
    instructor: 'Emily Clark',
    time: '06:00 PM-07:00 PM',
    date: 'Thu, 24 Aug',
    credits: '10',
    status: 'Cancelled',
    imageUrl:
      'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  },
  {
    id: 5,
    activityName: 'Yoga',
    organisationName: 'Yoga Academy',
    instructor: 'Emily Clark',
    time: '06:00 PM-07:00 PM',
    date: 'Thu, 24 Aug',
    credits: '10',
    status: 'Approved',
    imageUrl:
      'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  },
  {
    id: 6,
    activityName: 'Yoga',
    organisationName: 'Yoga Academy',
    instructor: 'Emily Clark',
    time: '06:00 PM-07:00 PM',
    date: 'Thu, 24 Aug',
    credits: '10',
    status: 'Cancelled',
    imageUrl:
      'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  },
];

export const homeSearch = {
  categories: categoriesMock,
  craftedForYou: [
    {
      activityId: 1,
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
      activityId: 1,
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
  ],
  fillingOutFast: [
    {
      activityId: 1,
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
      activityId: 1,
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
  ],
};
export const faqs = [
  {
    question: 'What is Kussbus?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat quibusdam rerum quaerat magnam id vero illum sint itaque aliquam, saepe accusantium doloribus earum nemo eum nesciunt dolores cupiditate dignissimos.',
  },

  {
    question: 'Why choose Kussbus?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat quibusdam rerum quaerat magnam id vero illum sint itaque aliquam, saepe accusantium doloribus earum nemo eum nesciunt dolores cupiditate dignissimos.',
  },

  {
    question: 'What Kussbus lines are available?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat quibusdam rerum quaerat magnam id vero illum sint itaque aliquam, saepe accusantium doloribus earum nemo eum nesciunt dolores cupiditate dignissimos.',
  },

  {
    question: 'What are the different stops?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat quibusdam rerum quaerat magnam id vero illum sint itaque aliquam, saepe accusantium doloribus earum nemo eum nesciunt dolores cupiditate dignissimos.',
  },

  {
    question: 'Is there a list of judgments?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat quibusdam rerum quaerat magnam id vero illum sint itaque aliquam, saepe accusantium doloribus earum nemo eum nesciunt dolores cupiditate dignissimos.',
  },

  {
    question: 'What if I cannot find a stop?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat quibusdam rerum quaerat magnam id vero illum sint itaque aliquam, saepe accusantium doloribus earum nemo eum nesciunt dolores cupiditate dignissimos.',
  },

  {
    question: 'Hello',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat quibusdam rerum quaerat magnam id vero illum sint itaque aliquam, saepe accusantium doloribus earum nemo eum nesciunt dolores cupiditate dignissimos.',
  },

  {
    question: 'It is brackettup',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat quibusdam rerum quaerat magnam id vero illum sint itaque aliquam, saepe accusantium doloribus earum nemo eum nesciunt dolores cupiditate dignissimos.',
  },

  {
    question: 'Health',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat quibusdam rerum quaerat magnam id vero illum sint itaque aliquam, saepe accusantium doloribus earum nemo eum nesciunt dolores cupiditate dignissimos.',
  },

  {
    question: 'Wellness',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat quibusdam rerum quaerat magnam id vero illum sint itaque aliquam, saepe accusantium doloribus earum nemo eum nesciunt dolores cupiditate dignissimos.',
  },

  {
    question: 'Wellness',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat quibusdam rerum quaerat magnam id vero illum sint itaque aliquam, saepe accusantium doloribus earum nemo eum nesciunt dolores cupiditate dignissimos.',
  },
];

export let accountMockData = {
  firstName: 'Shourya',
  lastName: 'Rastogi',
  gender: 'male',
  mobile: '1234567890',
  email: 'abc@gmail.com',
};

export const portfolioDataMock = [
  {
    organizationId: 1,
    images: [
      {
        id: '1',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/r1oaybq0ejmylhdy3jv9.jpg',
      },
      {
        id: '2',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
      },
      {
        id: '3',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/r1oaybq0ejmylhdy3jv9.jpg',
      },
      {
        id: '4',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/r1oaybq0ejmylhdy3jv9.jpg',
      },
      {
        id: '5',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
      },
    ],
    organizationName: 'Chasse Dance Studios',
    rating: {
      content: {
        title: 'Heels Immediate',
        description:
          'Sofie is a very good dancer and teacher. I am sad about the summer break I am sad about the summer break ',
      },
      value: '4.8',
      count: '(20,000+)',
    },
    location: {
      locationReference:
        'Chasse Dance Studios is met 9 studios het groove studios het groove Chasse Dance Studios is met 9 studios het groove studios het groove',
      name: 'Zuidas',
      coordinates: { lat: '90', long: '90' },
    },
    bookingCount: '100+ bookings this week',
    advantageText: 'You save a total of 38% with BrackettUp',
    description:
      'This is our signature 45 minute indoor Roride. Every class includes the use of cycling shoes and dumbbells.',

    instagramAccount: 'chassedancestudios',
    websiteUrl: 'chasse-dancestudios.nl',
    about:
      'Chasse Dance Studios is met 9 studios het groove studios het groove. Chasse Dance Studios is met 9 studios het groove studios het groove  ',
    highlights: ['LGBTQ-friendly'],
    mapVideo: 'https://videos.pexels.com/video-files/3209300/3209300-uhd_2560_1440_25fps.mp4',
    videoText: 'CHASSE DANCE STUDIO NICOLE KIRKLAND RECAP KIRKLAND RECAP KIRKLAND RECAP ',
    howToGetThere:
      'Chasse Dance Studios is met 9 studios het groove studios het groove Chasse Dance Studios is met 9 studios het groove studios het groove ',
    updatedDate: 'Provided by Rocycle. Updated on 3/7/2024.',
    safety: ['Ventilation system', 'Extra sanitation'],
  },
  {
    organizationId: 2,
    images: [
      {
        id: '1',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/zf79zuoxsozfzovlgolf.jpg',
      },
      {
        id: '2',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/ggjnlugk1n9dgcgczibs.jpg',
      },
      {
        id: '3',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/r1oaybq0ejmylhdy3jv9.jpg',
      },
      {
        id: '4',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/r1oaybq0ejmylhdy3jv9.jpg',
      },
      {
        id: '5',
        uri: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/r1oaybq0ejmylhdy3jv9.jpg',
      },
    ],
    organizationName: 'Chasse Dance Studios',
    rating: {
      content: {
        title: 'Heels Immediate',
        description:
          'Sofie is a very good dancer and teacher. I am sad about the summer break I am sad about the summer break ',
      },
      value: '4.8',
      count: '(20,000+)',
    },
    location: {
      locationReference:
        'Chasse Dance Studios is met 9 studios het groove studios het groove Chasse Dance Studios is met 9 studios het groove studios het groove',
      name: 'Zuidas',
      coordinates: { lat: '90', long: '90' },
    },
    bookingCount: '100+ bookings this week',
    advantageText: 'You save a total of 38% with BrackettUp',
    description:
      'This is our signature 45 minute indoor Roride. Every class includes the use of cycling shoes and dumbbells.',

    instagramAccount: 'chassedancestudios',
    websiteUrl: 'chasse-dancestudios.nl',
    about:
      'Chasse Dance Studios is met 9 studios het groove studios het groove. Chasse Dance Studios is met 9 studios het groove studios het groove  ',
    highlights: ['LGBTQ-friendly'],
    mapVideo: 'https://videos.pexels.com/video-files/3209300/3209300-uhd_2560_1440_25fps.mp4',
    videoText: 'CHASSE DANCE STUDIO NICOLE KIRKLAND RECAP KIRKLAND RECAP KIRKLAND RECAP ',
    howToGetThere:
      'Chasse Dance Studios is met 9 studios het groove studios het groove Chasse Dance Studios is met 9 studios het groove studios het groove ',
    updatedDate: 'Provided by Rocycle. Updated on 3/7/2024.',
    safety: ['Ventilation system', 'Extra sanitation'],
  },
];

export const activityReviewDataMock = [
  {
    activityId: 2,
    title: 'ClubSportive',
    reviewMeta: {
      ratingsBreakdown: {
        oneStarCount: 100,
        twoStarCount: 200,
        threeStarCount: 300,
        fourStarCount: 400,
        fiveStarCount: 500,
      },
      totalReviewCount: 1500,
      reviewAverage: 4.8,
      maxRating: 5.0,
      reviewCountDesc: '10000',
    },
    reviews: [
      {
        id: 1,
        currentRating: 3,
        activityName: 'K/C Reformer Pilates with Joey',
        description:
          'Zo’n lieve man! Was behulpzaam gaf je een zelfverzekerd gevoel en had goede uitleg en fijne oefeningen:)',
        time: '3 hours ago',
      },
      {
        id: 2,
        currentRating: 5.0,
        activityName: 'K/C Reformer Pilates with Mathieu',
        description: 'What a great instructor! Love this studio and the classes!',
        time: 'Yesterday',
      },
      {
        id: 3,
        currentRating: 3.0,
        activityName: 'K/C Reformer Pilates with Jewel',
        description:
          'Hele goede les! Jewel geeft duidelijke aanwijzingen en originele zinvolle oefeningen',
        time: '5 days ago',
      },
      {
        id: 4,
        currentRating: 5.0,
        activityName: 'K/C Reformer Pilates with Jewel',
        description:
          'Hele goede les! Jewel geeft duidelijke aanwijzingen en originele zinvolle oefeningen',
        time: '2 days ago',
      },
      {
        id: 5,
        currentRating: 5.0,
        activityName: 'K/C Reformer Pilates with Jewel',
        description:
          'Hele goede les! Jewel geeft duidelijke aanwijzingen en originele zinvolle oefeningen',
        time: '2 days ago',
      },
    ],
  },
  {
    activityId: 1,
    title: 'Yoga',
    reviewMeta: {
      ratingsBreakdown: {
        oneStarCount: 50,
        twoStarCount: 150,
        threeStarCount: 250,
        fourStarCount: 350,
        fiveStarCount: 450,
      },
      totalReviewCount: 1250,
      reviewAverage: 4.5,
      maxRating: 5.0,
      reviewCountDesc: '8000',
    },
    reviews: [
      // {
      //   id: 4,
      //   currentRating: 4.5,
      //   activityName: "Yoga Basics with Anna",
      //   description: "Anna is very calm and knowledgeable. Great for beginners!",
      //   time: "5 hours ago",
      // },
      // {
      //   id: 5,
      //   currentRating: 4.0,
      //   activityName: "Advanced Yoga with Mark",
      //   description: "Challenging class with detailed instructions. Highly recommend!",
      //   time: "2 days ago",
      // },
      // {
      //   id: 5,
      //   currentRating: 4.0,
      //   activityName: "Advanced Yoga with Mark",
      //   description: "Challenging class with detailed instructions. Highly recommend!",
      //   time: "2 days ago",
      // },
      // {
      //   id: 5,
      //   currentRating: 4.0,
      //   activityName: "Advanced Yoga with Mark",
      //   description: "Challenging class with detailed instructions. Highly recommend!",
      //   time: "2 days ago",
      // },
    ],
  },
];

export const accountBalanceMock = {
  balance: 10,
};

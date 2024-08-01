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
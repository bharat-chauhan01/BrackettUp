import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ActivityContainer from '../components/ActivityContainer';

export default function HomeScreen() {
  const activities = [
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
  ];
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
      }}
    >
      <Text>Welcome to Home Screen</Text>
      <View
        style={{
          paddingLeft: 12,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {activities.map((activity, index) => (
            <ActivityContainer
              key={index}
              imageUrl={activity.imageUrl}
              title={activity.title}
              subtitle={activity.subtitle}
              distance={activity.distance}
              activity={activity.activity}
              rating={activity.rating}
              ratingCount={activity.ratingCount}
              ratingDesc={activity.ratingDesc}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  { GlobalStyle }  from '../constants/globalStyling';

export default function About() {
  return (
    <View style={[GlobalStyle.container]}>
      <Text style={[GlobalStyle.heading]}>
        About us
      </Text>
      <Text style={{ fontSize: 17, fontWeight: '300', paddingVertical: 17 }}>
        HIIT Bootcamp Vondelpark is a dynamic outdoor fitness experience that combines high-intensity interval
        training with bodyweight exercises and resistance band work. Our expert instructors create energizing workout sessions set to motivating beats in the beautiful surroundings of Amsterdam's Vondelpark. We believe in promoting overall health and wellness through challenging yet fun group fitness classes that build strength, endurance, and a supportive community spirit. Whether you're a seasoned athlete or just starting your fitness journey, our inclusive bootcamps provide an invigorating full-body workout tailored to different fitness levels. 
        Join us amidst the park's greenery for an unbeatable exercise experience that leaves you feeling empowered and rejuvenated.
      </Text>
    </View>
  );
}

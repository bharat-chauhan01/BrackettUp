import React from 'react';
import { Text, View, SafeAreaView, ScrollView, useColorScheme, StyleSheet } from 'react-native';
import Header from '../components/header';
import Crousal from '../components/crousal';
import InformationPage from '../components/informationPage';
//import Review from '@/components/Review';
import CancellationPolicy from '../components/cancellationPolicy';
import About from '../components/about';
import Footer from '../components/footer';

export default function ActivityClass() {
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingTop: 60, paddingBottom: 70 }}>
        <Crousal />
        {/* <InformationPage /> */}
        {/* <Review /> */}
        <CancellationPolicy />
        <About />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  toast: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
});

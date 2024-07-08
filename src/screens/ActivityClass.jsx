import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import About from '../components/about';
import CancellationPolicy from '../components/cancellationPolicy';
import Crousal from '../components/crousal';
import Footer from '../components/footer';
import Header from '../components/header';

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

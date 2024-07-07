import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

export default function Footer() {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Reservation Successful',
      text2: 'Thank you for booking with us. See you at the gym!',
      swipeable: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>3 credits</Text>
        <Text style={{ fontSize: 17, fontWeight: '400', color: 'rgba(0,0,0,0.3)' }}> Good value</Text>
      </View>
      <TouchableOpacity style={styles.reserveButton} onPress={showToast}>
        <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>Reserve</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 1,
    borderTopWidth: 2,
    borderColor: '#EEEEEE',
  },
  reserveButton: {
    backgroundColor: '#1DA1F2',
    padding: 15,
    paddingHorizontal: 45,
    borderRadius: 30,
  },
});

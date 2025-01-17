import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function CancellationPolicy() {
  const LoginState = useSelector(state => state.Login);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Cancellation policy</Text>
      <Text style={{ fontSize: 17, fontWeight: '300', paddingVertical: 17 }}>
        {LoginState.user}
        Cancel 12 hours in advance to avoid a $8.00 late cancellation fee. A missed reservation will
        result in a $11.00 fee.
      </Text>
      <Text style={{ fontSize: 17, textDecorationLine: 'underline', fontWeight: 'bold' }}>
        Learn more
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 7,
    backgroundColor: 'white',
  },
});

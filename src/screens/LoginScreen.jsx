import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GoogleSignInComponent from '../components/GoogleSignInComponent';

const { width } = Dimensions.get('window');

const LoginOptionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.message}>Continue with one of the following options</Text>

      <GoogleSignInComponent />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('PhoneNumberLogin');
        }}
      >
        <MaterialCommunityIcons name="phone" size={24} color="#34b7f1" style={styles.icon} />
        <Text style={styles.buttonText}>Mobile Number</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          /* Handle Email Login */
        }}
      >
        <MaterialCommunityIcons name="email" size={24} color="#D93025" style={styles.icon} />
        <Text style={styles.buttonText}>Email</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => {
          navigation.navigate('Landing');
        }}
      >
        <Text style={styles.skipButtonText}>Skip For Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    borderRadius: 30,
    width: width * 0.9,
    marginBottom: 15,
    justifyContent: 'center',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    width: '100%',
  },
  skipButton: {
    marginTop: 20,
    width: width * 0.9,
    borderRadius: 10,
    overflow: 'hidden',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '100%',
  },
  skipButtonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default LoginOptionsScreen;

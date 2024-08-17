import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  ActivityIndicator,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { googleAuthLogin } from '../apis/AuthApi';
import { useDispatch } from 'react-redux';
import { setLogin } from '../store/slices/loginSlice';

const { width } = Dimensions.get('window');

const GoogleSignInComponent = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1036707798168-pjv1hs6h5c9huk4hi4dicmi798ep16ia.apps.googleusercontent.com',
      androidClientId: '1036707798168-d25nohrqfpck41bt34d248dpo9irtuik.apps.googleusercontent.com',
    });
  }, []);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const res = await googleAuthLogin(userInfo.idToken);
      dispatch(setLogin({ res }));
      navigation.navigate('Landing');
    } catch (error) {
      console.error(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Sign-In Cancelled', 'You cancelled the sign-in process.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Sign-In In Progress', 'Google Sign-In is already in progress.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert(
          'Play Services Not Available',
          'Google Play Services are not available on your device.',
        );
      } else {
        Alert.alert('Sign-In Error', 'An error occurred during Google Sign-In.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleGoogleLogin} disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color="#DB4437" />
      ) : (
        <View style={styles.content}>
          <MaterialCommunityIcons name="google" size={24} color="#DB4437" style={styles.icon} />
          <Text style={styles.buttonText}>Google</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default GoogleSignInComponent;

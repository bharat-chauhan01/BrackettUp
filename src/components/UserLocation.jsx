// hooks/useUserLocation.js
import { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';
import { setLocation } from '../store/slices/LocationSlice';

const useUserLocation = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
          getLocation(); // Get location after permission is granted
        } else {
          console.log('Location permission denied');
          setErrorMsg('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
        setErrorMsg(err.message);
      }
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        dispatch(setLocation({ latitude, longitude }));
      },
      error => {
        console.log(error.code, error.message);
        setErrorMsg(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  return { errorMsg };
};

export default useUserLocation;

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import LandingScreen from './screens/LandingScreen';
import Login from './screens/LoginScreen';
import { store } from './store/redux/store';
import SplashScreen from 'react-native-splash-screen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TermsAndConditions from './screens/TermAndConditionScreen';

import { LogBox } from 'react-native';
import { toastConfig } from '../src/constants/toastConfig';
import Toast from 'react-native-toast-message';
import HomeScreen from './screens/HomeScreen';
import PhoneNumberLogin from './screens/PhoneNumberLogin';

LogBox.ignoreAllLogs(); // Ignore all log notifications

const Stack = createNativeStackNavigator();

export default function App() {
  const [landingPage, setLandingPage] = useState(null);

  useEffect(() => {
    // Retrieve data when the component mounts
    const getData = async () => {
      try {
        const firstTimeUser = await AsyncStorage.getItem('firstTimeUser');
        if (firstTimeUser !== null) {
          setLandingPage('Landing');
        } else {
          await AsyncStorage.setItem('firstTimeUser', 'loggedIn');
          setLandingPage('Login');
        }
      } catch (e) {
        console.log('Exception during fetching data from AsyncStorage :: ', e);
        setLandingPage('Login');
      } finally {
        SplashScreen.hide();
      }
    };
    getData();
  }, []);

  if (landingPage === null) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={landingPage}
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen
            name="TermAndCondition"
            component={TermsAndConditions}
            options={{ contentStyle: { backgroundColor: '#f0f0f0' } }}
          />
          <Stack.Screen name="PhoneNumberLogin" component={PhoneNumberLogin} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </Provider>
  );
}

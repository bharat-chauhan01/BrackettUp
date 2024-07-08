import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
import HomeScreen from './HomeScreen';
import { ProfileScreen } from './ProfileScreen';
import UpcomingClassScreen from './UpcomingClassScreen';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

export default function LandingScreen() {
  const windowHeight = Dimensions.get('window').height;
  const navBarHeight = windowHeight * 0.09;
  const navBarPaddingBottom = navBarHeight * 0.25;
  const iconHeight = navBarHeight * 0.5;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          height: navBarHeight,
          paddingBottom: navBarPaddingBottom,
        },
        style: {
          position: 'absolute',
          backgroundColor: 'black',
          borderColor: 'black',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"#000000"} size={iconHeight} />
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="magnify" color={"#000000"} size={iconHeight} />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingClassScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="calendar" color={"#000000"} size={iconHeight} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={"#000000"} size={iconHeight} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

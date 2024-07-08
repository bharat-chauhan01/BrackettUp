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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={iconHeight} />
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={iconHeight} />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingClassScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={iconHeight} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={iconHeight} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

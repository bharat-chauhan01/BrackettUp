import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import UpcomingClassScreen from './UpcomingClassScreen';
import SearchScreen from './SearchScreen';
import SearchLandingScreen from './SearchLandingScreen';
import { useDispatch } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function LandingScreen() {
  const windowHeight = Dimensions.get('window').height;
  const navBarHeight = windowHeight * 0.09;
  const navBarPaddingBottom = navBarHeight * 0.25;
  const iconHeight = navBarHeight * 0.5;
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          height: navBarHeight,
          paddingBottom: navBarPaddingBottom,
          backgroundColor: 'white',
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={iconHeight} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchLandingScreen}
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
        listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.navigate('Profile');
          },
        })}
      />
    </Tab.Navigator>
  );
}

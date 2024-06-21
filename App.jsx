
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


import Login from './screens/login';
import Home from './screens/home';
import IconButton from './components/iconButtons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      // screenOptions={{
      //   // headerStyle: { backgroundColor: '#351401' },
      //   // headerTintColor: 'white',
      //   // sceneContainerStyle: { backgroundColor: '#3f2f25' },
      //   // drawerContentStyle: { backgroundColor: '#351401' },
      //   // drawerInactiveTintColor: 'white',
      //   // drawerActiveTintColor: '#351401',
      //   // drawerActiveBackgroundColor: '#e4baa1',
      // }}
    >
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <IconButton icon="airplane" color="#ff0000" size={20} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          drawerIcon: ({ color, size }) => (
            <IconButton name="star" color={color} size={size} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      {/* <StatusBar style="light" /> */}            
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About the Meal',
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

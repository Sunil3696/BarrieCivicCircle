import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventsScreen from '../screens/EventsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ setIsUserLoggedIn }) => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
      <Tab.Screen name="Events" component={EventsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" options={{ headerShown: false }} >
        {props => <ProfileScreen {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;

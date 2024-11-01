import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventsScreen from '../screens/EventsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Events') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Return the icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#42a5f5',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Events" component={EventsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" options={{ headerShown: false }}>
        {props => <ProfileScreen {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;

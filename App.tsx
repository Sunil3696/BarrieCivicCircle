/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import LoginPage from './src/screens/LoginPage';
import SignUpPage from './src/screens/SignUpPage';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const MainStack = createNativeStackNavigator();

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      {isUserLoggedIn ? (
        <MainStackNavigator setIsUserLoggedIn={setIsUserLoggedIn} />
      ) : (
        <AuthStackNavigator setIsUserLoggedIn={setIsUserLoggedIn} />
      )}
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
  
  
export default App;
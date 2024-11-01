import React from 'react';
import { View, Text, Button } from 'react-native';
import { signOutUser } from '../services/auth.service';
import commonStyles from '../styles/commonStyles'

const ProfileScreen = ({ setIsUserLoggedIn }) => {
  const handleLogout = async () => {
    await signOutUser();
    setIsUserLoggedIn(false);
  };

  return (
    <View style={commonStyles.container}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;

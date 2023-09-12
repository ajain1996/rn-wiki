import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ForgotPassword from '../screens/auth/ForgotPassword';
import UpdateLoginInfo from '../screens/auth/UpdateLoginInfo';
import ChangePasswordScreen from '../screens/auth/ChangePasswordScreen';
import CreateProfileScreen from '../screens/auth/CreateProfileScreen';
import UpdateProfile from '../screens/auth/UpdateProfile';
import Awesomescreen from '../screens/auth/Awesomescreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"SplashScreen"}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />

      <Stack.Screen
        name="UpdateLoginInfo"
        component={UpdateLoginInfo}
      />

      <Stack.Screen
        name="CreateProfileScreen"
        component={CreateProfileScreen}
      />

      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
      />

      <Stack.Screen
        name="Awesomescreen"
        component={Awesomescreen}
      />

      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;

import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
//Auth Screens
import Login from '../../screens/auth/Login';
import Signup from '../../screens/auth/Signup';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import ResetPassword from '../../screens/auth/ResetPassword';
import ConfirmOTP from '../../screens/auth/ConfirmOTP';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator headerMode={'none'} initialRouteName={'Login'}>
    <Stack.Screen name={'Login'} component={Login} />
    <Stack.Screen name={'Signup'} component={Signup} />
    <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
    <Stack.Screen name={'ConfirmOTP'} component={ConfirmOTP} />
    <Stack.Screen name={'ResetPassword'} component={ResetPassword} />
  </Stack.Navigator>
);

export {AuthStack};

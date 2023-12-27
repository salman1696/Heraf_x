/** @format */

import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../screens/Home/BottomTabs/Account';
import Profile from '../../screens/Home/BottomTabs/Account/Profile';
import ProfileDetail from '../../screens/Home/BottomTabs/Account/ProfileDetail';
import UpdatePassword from '../../screens/Home/BottomTabs/Account/UpdatePassword';
import Notification from '../../screens/Home/BottomTabs/Account/Notification';
import Payment from '../../screens/Home/BottomTabs/Account/Payment';
import AccountPreference from '../../screens/Home/BottomTabs/Account/AccountPreference';
import ContactUs from '../../screens/Home/BottomTabs/Account/ContactUs';

const Stack = createStackNavigator();

const AccountStack = () => (
  <Stack.Navigator headerMode={'none'} initialRouteName={'Courses'}>
    <Stack.Screen name={'Account'} component={Account} />
    <Stack.Screen name={'Profile'} component={Profile} />
    <Stack.Screen name={'ProfileDetail'} component={ProfileDetail} />
    <Stack.Screen name={'UpdatePassword'} component={UpdatePassword} />
    <Stack.Screen name={'Notification'} component={Notification} />
    <Stack.Screen name={'Payment'} component={Payment} />
    <Stack.Screen name={'AccountPreference'} component={AccountPreference} />
    <Stack.Screen name={'ContactUs'} component={ContactUs} />
  </Stack.Navigator>
);

export { AccountStack };

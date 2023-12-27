import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import MainFlow from '../../screens/Home/BottomTabs';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator headerMode={'none'} initialRouteName={'MainFlow'}>
    <Stack.Screen name={'MainFlow'} component={MainFlow} />
  </Stack.Navigator>
);

export {HomeStack};

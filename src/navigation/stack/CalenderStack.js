/** @format */

import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AllDates from '../../screens/Home/BottomTabs/Calender/AllDates';
import Lectures from '../../screens/Home/BottomTabs/Calender/Lectures';
import CalenderTab from '../../screens/Home/BottomTabs/Calender/CalenderTbs';

const Stack = createStackNavigator();

const CalenderStack = () => (
  <Stack.Navigator headerMode={'none'} initialRouteName={'CalenderTab'}>
    <Stack.Screen name={'CalenderTab'} component={CalenderTab} />
    <Stack.Screen name={'AllDates'} component={AllDates} />
    <Stack.Screen name={'Lectures'} component={Lectures} />
  </Stack.Navigator>
);

export { CalenderStack };

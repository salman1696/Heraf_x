import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Courses from '../../screens/Home/BottomTabs/Courses/Courses';
import OverView from '../../screens/Home/BottomTabs/Courses/OverView';
import Lectures from '../../screens/Home/BottomTabs/Courses/Lectures';
import Meterial from '../../screens/Home/BottomTabs/Courses/Meterial';
import MeterialDetail from '../../screens/Home/BottomTabs/Courses/Meterial/MeterialDetail';
import LeaveReq from '../../screens/Home/BottomTabs/Courses/LeaveReq';

const Stack = createStackNavigator();

const CoursesStack = () => (
  <Stack.Navigator headerMode={'none'} initialRouteName={'Courses'}>
    <Stack.Screen name={'Courses'} component={Courses} />
    <Stack.Screen name={'OverView'} component={OverView} />
    <Stack.Screen name={'Lectures'} component={Lectures} />
    <Stack.Screen name={'Meterial'} component={Meterial} />
    <Stack.Screen name={'MeterialDetail'} component={MeterialDetail} />
    <Stack.Screen name={'LeaveReq'} component={LeaveReq} />
  </Stack.Navigator>
);

export {CoursesStack};

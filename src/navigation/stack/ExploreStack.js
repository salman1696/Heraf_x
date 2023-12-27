import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Explore from '../../screens/Home/BottomTabs/Explore';
import CourseByCategory from '../../screens/Home/BottomTabs/Explore/CourseByCategory';
import CourseDetail from '../../screens/Home/BottomTabs/Explore/CourseDetail';

const Stack = createStackNavigator();

const ExploreStack = () => (
  <Stack.Navigator headerMode={'none'} initialRouteName={'Explore'}>
    <Stack.Screen name={'Explore'} component={Explore} />
    <Stack.Screen name={'CourseByCategory'} component={CourseByCategory} />
    <Stack.Screen name={'CourseDetail'} component={CourseDetail} />
  </Stack.Navigator>
);

export {ExploreStack};

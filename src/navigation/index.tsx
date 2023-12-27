/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';

// //Auth Screens
import Splash from '../screens/auth/Splash';
import Login from '../screens/auth/Login';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const DrawerStack = () => (
//   <Drawer.Navigator
//     drawerContent={props => <DrawerContent {...props} />}
//     drawerStyle={{width: '100%'}}
//     drawerType={'slide'}
//     screenOptions={{gestureEnabled: true}}
//     initialRouteName={'Home'}
//     headerMode={'none'}>
//     <Drawer.Screen
//       options={{gestureEnabled: false, headerShown: false}}
//       name={'Home'}
//       component={Home}
//     />
//     <Drawer.Screen
//       options={{gestureEnabled: false, headerShown: false}}
//       name={'DetailScreen'}
//       component={DetailScreen}
//     />
//   </Drawer.Navigator>
// );

const MainNavigation = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName={'Splash'}>
        <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name={'Login'} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

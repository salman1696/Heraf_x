/** @format */

import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { ExploreStack } from '../../../navigation/stack/ExploreStack';
import Account from './Account';

import { TabBar } from './TabBar';
import theme from '../../../theme';
import { home } from '../../../assets';
import Dashboard from './Dashboard';
import { CalenderStack } from '../../../navigation/stack/CalenderStack';
import { CoursesStack } from '../../../navigation/stack/MyCourseStack';
import { AccountStack } from '../../../navigation/stack/AccountStack';
import CalenderTab from './Calender/CalenderTbs';

const Tab = createBottomTabNavigator();

const MainFlow = ({ navigation }: { navigation: any }) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      // initialRouteName={
      //   route?.params?.route === 'ProfileTabs' ? 'Profile' : null
      // }
      initialRouteName={'Courses'}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        style: {
          borderWidth: 0.5,
          borderBottomWidth: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: 'grey',
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        component={Dashboard}
        name={'Dashboard'}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={home}
              resizeMode={'contain'}
              style={{ height: 42, width: 42, marginHorizontal: 5 }}
            />
          ),
        }}
      />
      <Tab.Screen
        component={ExploreStack}
        name={'Explore'}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='reorder' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={CoursesStack}
        name={'Courses'}
        options={{
          tabBarLabel: 'My Courses',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='reorder' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={CalenderStack}
        name={'Calender'}
        options={{
          tabBarLabel: 'Calender',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={AccountStack}
        name={'Account'}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainFlow;

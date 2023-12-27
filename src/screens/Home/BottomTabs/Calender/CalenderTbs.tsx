/** @format */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  ImageBackground,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { course_horizontal_img } from '../../../../assets';
import { AppHeader, AppHeaderBack } from '../../../../components';

import styles from './styles';

import AllDates from './AllDates';
import Lectures from './Lectures';
import { TabBar } from './index';
import Events from './Events';
import Leaves from './Leaves';
import { HEADER_HEIGHT } from '../../../../utils/Constants';
import theme from '../../../../theme';

const Tab = createMaterialTopTabNavigator();

const CalenderTab = ({ navigation }: { navigation: any }) => {
  const [isEnrolled, setEnrolled] = useState(false);

  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ? <View
        style={{
          backgroundColor: theme.colors.primary,
          height: HEADER_HEIGHT,
        }}>
        <StatusBar
          translucent
          backgroundColor='#000'
          barStyle='light-content'
        />
      </View> :
        <StatusBar
          translucent
          backgroundColor={theme.colors.primary}
          barStyle='light-content'
        />}

      {Platform.OS === 'android' && <View style={styles.androidMargin}></View>}
      <View style={styles.containerMain}>
        <AppHeaderBack
          title={'Calender'}
          back={null} navigation={navigation} />

        <Tab.Navigator
          tabBar={(props) => <TabBar {...props} />}
          initialRouteName={'AllDates'}>
          <Tab.Screen
            name={'AllDates'}
            component={AllDates}
            options={{
              tabBarLabel: 'All Dates',
            }}
          />
          <Tab.Screen
            name={'Lectures'}
            component={Lectures}
            options={{
              tabBarLabel: 'Lectures',
            }}
          />
          <Tab.Screen
            name={'Events'}
            component={Events}
            options={{
              tabBarLabel: 'Events',
            }}
          />
          <Tab.Screen
            name={'Leaves'}
            component={Leaves}
            options={{
              tabBarLabel: 'Leaves',
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default CalenderTab;

/** @format */

import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import theme from '../../../../../theme';

import styles from './styles';

const Calender = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar translucent backgroundColor="transparent" /> */}

      <View style={styles.containerMain}>
        <Calendar
          style={{
            // colo
            justifyContent: 'center',
            width: '100%',
            padding: 10,
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}
          theme={{
            backgroundColor: '#fcfcfc',
            calendarBackground: '#fcfcfc',
          }}
          markingType={'period'}
          markedDates={{
            '2022-01-16': {
              // selected: true,
              // marked: true,
              startingDay: true,
              endingDay: true,
              color: theme.colors.primary,
              textColor: 'white',
            },
            '2022-01-09': {
              startingDay: true,
              textColor: 'white',
              color: theme.colors.secondary,
            },
            '2022-01-10': {
              selected: true,
              endingDay: true,
              color: theme.colors.secondary,
              textColor: 'white',
            },
            '2022-01-22': {
              startingDay: true,
              textColor: 'white',
              color: theme.colors.primary,
            },
            '2022-01-23': {
              selected: true,
              endingDay: true,
              color: theme.colors.primary,
              textColor: 'white',
            },

            '2022-01-05': {
              startingDay: true,
              endingDay: true,
              color: theme.colors.primary,
              textColor: 'white',
            },

            '2022-01-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
            '2022-01-19': {
              startingDay: true,
              endingDay: true,
              textColor: 'white',
              color: theme.colors.secondary,
            },
            '2022-01-29': {
              startingDay: true,
              endingDay: true,
              textColor: 'white',
              color: theme.colors.redColor,
            },
          }}
        />
      </View>
    </SafeAreaView>

    //
  );
};

export default Calender;

/** @format */

import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { avatar, car, course_horizontal_img } from '../../../../../assets';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import { useRef } from 'react';
import { HP, WP } from '../../../../../utils';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import { Picker } from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';
import DeviceInfo from 'react-native-device-info';

const radioButtonsData = [
  {
    id: '1',
    label: '9:00 am - 11:00 am',
    value: 'option1',
    color: theme.colors.primary,
    selected: true,
    borderColor: '#B2B2B2',
    labelStyle: { fontFamily: Fonts.RobotoRegular, color: '#353535' },
  },
  {
    id: '2',
    label: '9:00 am - 11:00 am',
    value: 'option2',
    color: theme.colors.primary,
    selected: false,
    borderColor: '#B2B2B2',
    labelStyle: { fontFamily: Fonts.RobotoRegular, color: '#353535' },
  },
];

const LeaveReq = ({ navigation }: { navigation: any }) => {
  const [month, setMonth] = useState('month');
  const [data, setData] = useState([
    {
      id: '1',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: `Amet minim mollit non deserunt ullamco est sit `,
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '2',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Amet minim mollit non deserunt ullamco est sit ',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '3',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Amet minim mollit non deserunt ullamco est sit ',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '4',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Amet minim mollit non deserunt ullamco est sit ',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '5',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Amet minim mollit non deserunt ullamco est sit ',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
  ]);

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = (radioButtonsArray: any) => {
    setRadioButtons(radioButtonsArray);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: DeviceInfo.hasNotch() ? 0.86 : 0.82 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View
          style={{
            padding: 13,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '500',
              fontFamily: Fonts.RobotoBold,
              color: theme.colors.primary,
            }}>
            {'Select your class'}
          </Text>
          <View
            style={{
              width: '40%',
              height: 30,
              elevation: 4,
              borderRadius: 4,
              shadowColor: 'gray',
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
              backgroundColor: 'white',
              justifyContent: 'center',
              borderColor: '#00000032',
            }}>
            <Picker
              mode='dropdown'
              style={{
                color: theme.colors.textColor,
                fontSize: 7,
                height: 100,
                width: 150,
              }}
              selectedValue={month}
              onValueChange={(itemValue, itemIndex) => setMonth(itemValue)}>
              <Picker.Item label='Month' value='month' />
              <Picker.Item label='November,2021' value='nov' />
              <Picker.Item label='December,2021' value='dec' />
            </Picker>
          </View>
        </View>

        <ScrollView style={{ flex: 1 }}>
          {data.map((item) => {
            return (
              <View style={{ paddingHorizontal: 10 }}>
                <Text
                  style={{
                    left: 5,
                    fontSize: 17,
                    fontWeight: '700',
                    marginVertical: 7,
                    fontFamily: Fonts.RobotoBold,
                    color: '#6B6B6B',
                  }}>
                  {'Saturday , 12 Nov 2021'}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <RadioGroup
                    radioButtons={radioButtons}
                    color={'#fff'}
                    textColor={'#353535'}
                    onPress={onPressRadioButton}
                  />
                  <View style={{ justifyContent: 'space-between' }}>
                    <Text
                      style={{
                        right: 5,
                        fontSize: 14,
                        fontWeight: '100',
                        fontFamily: Fonts.RobotoRegular,
                        color: '#353535',
                      }}>
                      {'Accident Diagnosis'}
                    </Text>
                    <Text
                      style={{
                        right: 5,
                        marginTop: 18,
                        fontSize: 14,
                        fontWeight: '100',
                        fontFamily: Fonts.RobotoRegular,
                        color: '#353535',
                      }}>
                      {'Accident Diagnosis'}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    marginTop: 5,
                    backgroundColor: '#ebebeb',
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default LeaveReq;

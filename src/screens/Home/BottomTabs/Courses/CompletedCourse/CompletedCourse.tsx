/** @format */

import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  avatar,
  car,
  check_circle,
  course_horizontal_img,
  setting_img,
} from '../../../../../assets';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import { useRef } from 'react';
import { HP, WP } from '../../../../../utils';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import { Picker } from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';
import styles from './styles';
import { Button } from '../../../../../components';
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
  const [month, setMonth] = useState('');
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

  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;

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
    <View style={{ flex: DeviceInfo.hasNotch() ? 0.86 : 0.82  }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View
          style={{
            padding: 13,
            backgroundColor: 'white',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <ImageBackground
            style={{
              width: SCREEN_WIDTH - 30,
              height:
                Platform.OS === 'android'
                  ? SCREEN_HEIGHT / 4.9
                  : SCREEN_HEIGHT / 5.3,
              alignItems: 'center',
              shadowColor: 'gray',
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 7,
            }}
            imageStyle={{ borderRadius: 6 }}
            source={course_horizontal_img}
            resizeMode={'cover'}>
            <View
              style={{
                flexDirection: 'row',
                margin: 15,
                width: '93%',
                justifyContent: 'space-between',
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={setting_img}
                  resizeMode={'contain'}
                  style={{
                    width: 23,
                    height: 23,
                  }}
                />
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 18,
                    fontFamily: Fonts.RobotoRegular,
                    fontWeight: '700',
                    color: theme.colors.white,
                  }}>
                  {'Mechanical Engineering'}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={check_circle}
                  resizeMode={'contain'}
                  style={{
                    width: 23,
                    height: 23,
                  }}
                />
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 15,
                    fontFamily: Fonts.RobotoRegular,
                    fontWeight: '300',
                    color: theme.colors.white,
                  }}>
                  {'COMPLETED'}
                </Text>
              </View>
            </View>
            <Text
              style={{
                alignSelf: 'flex-start',
                left: 20,
                textAlign: 'left',
                width: '50%',
                fontSize: 11,
                fontFamily: Fonts.RobotoRegular,
                fontWeight: '300',
                color: theme.colors.white,
              }}>
              {
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....'
              }
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.secondary,
                borderRadius: 4,
                left: 20,
                top: 10,
                alignSelf: 'flex-start',
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 11,
                  paddingVertical: 4,
                  paddingHorizontal: 10,
                  fontFamily: Fonts.RobotoRegular,
                  fontWeight: '300',
                  color: theme.colors.white,
                }}>
                Download Course Material
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '85%',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                paddingVertical: 4,
                paddingHorizontal: 10,
                fontFamily: Fonts.RobotoRegular,
                color: theme.colors.black,
              }}>
              Course Duration
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingVertical: 4,
                paddingHorizontal: 10,
                fontFamily: Fonts.RobotoRegular,
                color: theme.colors.secondary,
              }}>
              6 Months
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                paddingVertical: 4,
                paddingHorizontal: 10,
                fontFamily: Fonts.RobotoRegular,
                color: theme.colors.black,
              }}>
              Course Fee
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingVertical: 4,
                paddingHorizontal: 10,
                fontFamily: Fonts.RobotoRegular,
                color: theme.colors.secondary,
              }}>
              SR 234
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 0.5,
            backgroundColor: '#EEEEEE',
            marginVertical: 5,
          }}
        />
        <View
          style={{
            alignSelf: 'center',
            width: '85%',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                paddingVertical: 4,
                paddingHorizontal: 10,
                fontFamily: Fonts.RobotoRegular,
                color: theme.colors.black,
              }}>
              Enrolled course on
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingVertical: 4,
                paddingHorizontal: 10,
                fontFamily: Fonts.RobotoRegular,
                color: theme.colors.secondary,
              }}>
              1 November, 2021
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                paddingVertical: 4,
                paddingHorizontal: 10,
                fontFamily: Fonts.RobotoRegular,
                color: theme.colors.black,
              }}>
              Tutor
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingVertical: 4,
                paddingHorizontal: 10,
                fontFamily: Fonts.RobotoRegular,
                color: theme.colors.secondary,
              }}>
              Talib Shaker
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 0.5,
            backgroundColor: '#EEEEEE',
            marginVertical: 5,
          }}
        />
        <View
          style={{
            alignSelf: 'center',
            width: '85%',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                paddingVertical: 4,
                paddingHorizontal: 10,
                fontFamily: Fonts.RobotoRegular,
                color: theme.colors.black,
              }}>
              Completed on
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingVertical: 4,
                paddingHorizontal: 10,
                fontFamily: Fonts.RobotoRegular,
                color: theme.colors.secondary,
              }}>
              1 May, 2022
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 0.5,
            backgroundColor: '#EEEEEE',
            marginVertical: 5,
          }}
        />
        <Button
          title={'DOWNLOAD CERTIFICATE'}
          textColor={theme.colors.white}
          backgroundColor={theme.colors.primary}
          style={{ bottom: 30, marginHorizontal: 30 }}
          // onPress={() => navigation.navigate('Signup')}
          loading={null}
        />
      </View>
    </View>
  );
};

export default LeaveReq;

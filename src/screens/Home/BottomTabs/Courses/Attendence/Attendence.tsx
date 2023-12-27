/** @format */

import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, ScrollView, Image } from 'react-native';
import {
  avatar,
  car,
  class_icon,
  clock_blue,
  course_horizontal_img,
  day,
} from '../../../../../assets';
import CalendarStrip from 'react-native-calendar-strip';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import moment from 'moment';
import { useRef } from 'react';
import { HP, WP } from '../../../../../utils';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import DeviceInfo from 'react-native-device-info';


let datesBlacklist = [
  {
    start: moment()?.subtract(1, 'week'),
    end: moment()?.subtract(1, 'day'),
  },
];
let TodayDate = moment().format('YYYY-MM-DD');

const Attendence = ({ navigation }: { navigation: any }) => {
  const WeekRef = useRef(null);

  const normal = 'normal';
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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [userOrder, setUserOrder] = React.useState('');

  const UpCommingLectures = () => {
    return (
      <View style={{ marginVertical: 5 }}>
        <View
          style={{
            marginHorizontal: WP(5),
            borderRadius: 8,
            borderWidth: 0.8,
            borderColor: '#35353530',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{ padding: 10 }}>
              <View
                style={{
                  paddingHorizontal: WP(2),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#F2BCFF',
                    padding: 8,
                    borderRadius: 105,
                  }}>
                  <Image
                    source={day}
                    resizeMode={'contain'}
                    style={{
                      width: 12,
                      height: 12,
                    }}
                  />
                </View>
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontFamily: Fonts.RobotoRegular,
                      fontSize: 13,
                      color: theme.colors.subTextColor,
                    }}>
                    Day/Date
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.RobotoBold,
                      fontSize: 14,
                      color: theme.colors.textColor,
                    }}>
                    Tue, 13 Nov 2021
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: WP(2),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#BCDBFF',
                    padding: 8,
                    borderRadius: 105,
                  }}>
                  <Image
                    source={clock_blue}
                    resizeMode={'contain'}
                    style={{
                      width: 12,
                      height: 12,
                    }}
                  />
                </View>
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontFamily: Fonts.RobotoRegular,
                      fontSize: 13,
                      color: theme.colors.subTextColor,
                    }}>
                    Day/Date
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.RobotoBold,
                      fontSize: 14,
                      color: theme.colors.textColor,
                    }}>
                    Tue, 13 Nov 2021
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: WP(2),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#FFBCBC',
                    padding: 8,
                    borderRadius: 105,
                  }}>
                  <Image
                    source={class_icon}
                    resizeMode={'contain'}
                    style={{
                      width: 12,
                      height: 12,
                    }}
                  />
                </View>
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontFamily: Fonts.RobotoRegular,
                      fontSize: 13,
                      color: theme.colors.subTextColor,
                    }}>
                    Day/Date
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.RobotoBold,
                      fontSize: 14,
                      color: theme.colors.textColor,
                    }}>
                    Tue, 13 Nov 2021
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignSelf: 'flex-start',
                top: 25,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                backgroundColor: '#3FBB13',
                alignItems: 'center',
                justifyContent: 'center',
                height: 23,
              }}>
              <Text
                style={{
                  paddingHorizontal: 12,
                  fontFamily: Fonts.RobotoBold,
                  fontSize: 14,
                  color: theme.colors.white,
                }}>
                Attended
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 0.87 }}>
      <ScrollView
        style={{
          backgroundColor: 'white',
        }}>
        <CalendarStrip
          ref={WeekRef}
          showDate={false}
          calendarAnimation={{ type: 'sequence', duration: 10 }}
          onDateSelected={(date) => {
            var utcFormate = moment.utc(date).format('YYYY-MM-DD');
            TodayDate = utcFormate;
          }}
          daySelectionAnimation={{
            type: 'border',
            duration: 200,
          }}
          style={{
            height: 40,
            paddingVertical: 10,
            left: WP(-2),
          }}
          selectedDate={moment()}
          highlightDateContainerStyle={{
            backgroundColor: theme.colors.primary,
            width: WP(9),
            borderRadius: HP(1),
            height: HP(7),
          }}
          showMonth={true}
          iconLeft={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Chevron_left_font_awesome.svg/512px-Chevron_left_font_awesome.svg.png',
          }}
          iconRight={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Chevron_right_font_awesome.svg/1200px-Chevron_right_font_awesome.svg.png',
          }}
          iconLeftStyle={{ tintColor: theme.colors.textColor }}
          iconRightStyle={{ tintColor: theme.colors.textColor }}
          dateNumberStyle={{
            color: theme.colors.textColor,
            fontWeight: normal,
          }}
          dateNameStyle={{
            color: '#35353590',
            fontWeight: normal,
          }}
          highlightDateNumberStyle={{
            color: theme.colors.lightGray,
            // fontWeight: normal,
          }}
          highlightDateNameStyle={{
            color: theme.colors.lightGray,
            // fontWeight: normal,
          }}
          calendarHeaderStyle={{
            color: theme.colors.textColor,
            // bottom: HP(0.5),
          }}
          disabledDateNameStyle={{ color: theme.colors.lightGray }}
          disabledDateNumberStyle={{ color: theme.colors.lightGray }}
          iconContainer={{ flex: 0.1 }}
          minDate={moment()}
        // datesBlacklist={datesBlacklist}
        />

        {data.map((item) => {
          return <UpCommingLectures />;
        })}
      </ScrollView>
    </View>
  );
};

export default Attendence;

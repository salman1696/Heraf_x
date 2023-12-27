import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, ScrollView, Image } from 'react-native';
import { avatar, car, course_horizontal_img } from '../../../../../assets';
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

const Lectures = ({ navigation }: { navigation: any }) => {
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
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <View
            style={{
              flex: 0.04,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: theme.colors.primary,
              width: 16,
              height: 13,
            }}
          />
          <View
            style={{
              flex: 0.91,
              marginEnd: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                left: 12,
                fontFamily: Fonts.RobotoBold,
                fontSize: 14,
                color: theme.colors.textColor,
              }}>
              07:00 AM
            </Text>
            <Text
              style={{
                left: 12,
                fontFamily: Fonts.RobotoRegular,
                fontSize: 11,
                color: theme.colors.subTextColor,
              }}>
              1h 45 min
            </Text>
          </View>
        </View>
        <View
          style={{
            left: 8,
            marginHorizontal: WP(5),
            borderRadius: 8,
            borderWidth: 0.8,
            borderColor: '#35353530',
            padding: WP(2),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: Fonts.RobotoBold,
                fontSize: 15,
                color: theme.colors.primary,
              }}>
              Accidental Car Analysis
            </Text>
            <Image
              source={car}
              resizeMode={'contain'}
              style={{
                width: WP(4),
                height: HP(2.5),
              }}
            />
          </View>
          <Text
            style={{
              fontFamily: Fonts.RobotoRegular,
              fontSize: 14,
              color: '#868686',
            }}>
            How to check engine of cars ?
          </Text>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 13,
              color: theme.colors.secondary,
            }}>
            Tutor
          </Text>
          <View
            style={{
              marginTop: 2,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image
              source={avatar}
              resizeMode={'contain'}
              style={{
                flex: 0.1,
                justifyContent: 'flex-start',
                width: WP(6),
                height: HP(6),
              }}
            />
            <Text
              style={{
                left: 5,
                flex: 0.58,
                fontFamily: Fonts.RobotoRegular,
                fontSize: 15,
                fontWeight: '700',
                color: '#868686',
              }}>
              Talib Shaker
            </Text>
            <Text
              style={{
                flex: 0.32,
                fontStyle: 'italic',
                fontFamily: Fonts.RobotoRegular,
                fontSize: 13,
                color: theme.colors.redColor,
              }}>
              Postponed
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: DeviceInfo.hasNotch() ? 0.86 : 0.82 }}>
      <ScrollView
        style={{
          backgroundColor: 'white',
        }}>
        <CalendarStrip
          ref={WeekRef}
          calendarAnimation={{ type: 'sequence', duration: 10 }}
          onDateSelected={date => {
            var utcFormate = moment.utc(date).format('YYYY-MM-DD');
            TodayDate = utcFormate;
          }}
          daySelectionAnimation={{
            type: 'border',
            duration: 200,
          }}
          style={{
            height: 100,
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
            bottom: HP(0.5),
          }}
          disabledDateNameStyle={{ color: theme.colors.lightGray }}
          disabledDateNumberStyle={{ color: theme.colors.lightGray }}
          iconContainer={{ flex: 0.1 }}
          minDate={moment()}
        // datesBlacklist={datesBlacklist}
        />

        {data.map(item => {
          return <UpCommingLectures />;
        })}
      </ScrollView>
    </View>
  );
};

export default Lectures;

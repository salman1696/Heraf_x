/** @format */

import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import {
  avatar,
  check_circle,
  course_horizontal_img,
  setting_img,
} from '../../../../../assets';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import { AppHeaderBack, Button } from '../../../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { HP, WP } from '../../../../../utils';
import { Icon } from 'react-native-elements';
import { HEADER_HEIGHT } from '../../../../../utils/Constants';
import { ScrollView } from 'react-native-gesture-handler';
import DeviceInfo from 'react-native-device-info';

const Notification = ({ navigation }: { navigation: any }) => {
  const [month, setMonth] = useState('');
  const [data, setData] = useState([
    {
      id: '1',
      filled: true,
      icon: 'bell',
      label: 'Kamran Ali',
      iconColor: '#CF8701',
      desc: 'Amet minim mollit non deserunt ullamco ...',
      family: 'font-awesome-5',
    },
    {
      id: '2',
      filled: false,
      icon: 'cloud-upload-alt',
      label: 'Loqman Shanwari',
      iconColor: '#016235',
      desc: 'Amet minim mollit non deserunt ullamco ...',
      family: 'font-awesome-5',
    },
    {
      id: '3',
      filled: false,
      icon: 'bookmark',
      label: 'kamran Ali',
      iconColor: '#595959',
      desc: 'Amet minim mollit non deserunt ullamco ...',
      family: 'font-awesome-5',
    },
    {
      id: '4',
      filled: false,
      icon: 'cloud-upload-alt',
      label: 'Kamran Ali',
      iconColor: '#016235',
      desc: 'Amet minim mollit non deserunt ullamco ...',
      family: 'font-awesome-5',
    },
  ]);

  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

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
          title={'Notification'}
          back={'yes'}
          navigation={navigation}
        />
        <ScrollView style={{ flex: 1, top: 5 }}>
          {data.map((item) => {
            return (
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  shadowColor: 'gray',
                  shadowOffset: { width: 5, height: 5 },
                  shadowOpacity: 0.2,
                  shadowRadius: 10,
                  margin: WP(1.6),
                  marginHorizontal: 10,
                  elevation: 10,
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    alignSelf: 'center',
                    width: WP(13),
                    height: DeviceInfo.hasNotch() ? HP(6) : HP(7.5),
                    marginHorizontal: 3,
                    justifyContent: 'center',

                    backgroundColor: item.iconColor,
                    borderRadius: 65,
                  }}>
                  <Icon
                    style={{
                      alignSelf: 'center',
                    }}
                    name={item.icon}
                    type={item.family}
                    size={23}
                    color={'white'} tvParallaxProperties={undefined} />
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    marginHorizontal: 5,
                    width: '83%',
                  }}>
                  <Icon
                    style={{
                      alignSelf: 'flex-end',
                    }}
                    name={'close'}
                    type={'antdesgin'}
                    size={20}
                    color={'gray'} tvParallaxProperties={undefined} />
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '900',
                      fontFamily: Fonts.RobotoRegular,
                      color: theme.colors.textColor,
                    }}>
                    {item.label}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      marginEnd: 30,
                      paddingVertical: 2,
                      fontFamily: Fonts.RobotoRegular,
                      color: theme.colors.subTextColor,
                    }}>
                    {item.desc}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      paddingVertical: 2,
                      fontSize: 10,
                      fontFamily: Fonts.RobotoRegular,
                      color: theme.colors.subTextColor,
                    }}>
                    {'06 Oct, 2021 - 13:09 PM'}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Notification;

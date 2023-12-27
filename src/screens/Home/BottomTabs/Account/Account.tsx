/** @format */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import {
  contacticon,
  courseicon,
  dolloricon,
  keyicon,
  langicon,
  logout,
  logowithoutarbi,
  notificaitonicon,
  ratingicon,
  settingicon,
  usericon,
} from '../../../../assets';
import theme from '../../../../theme';
import { HP, WP } from '../../../../utils';
import { HEADER_HEIGHT } from '../../../../utils/Constants';
import { Fonts } from '../../../../utils/Fonts';
import DeviceInfo from 'react-native-device-info';


import styles from './styles';
import { CommonActions } from '@react-navigation/native';

const Account = ({ navigation }: { navigation: any }) => {
  const [searchText, setSearchText] = useState('');

  const [data, setData] = useState([
    {
      id: '1',
      selected: false,
      icon: usericon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: `Personal Information`,
    },
    {
      id: '2',
      selected: true,
      icon: dolloricon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Payments',
    },
    {
      id: '3',
      selected: false,
      icon: notificaitonicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Notifications',
    },
    {
      id: '4',
      selected: false,
      icon: keyicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Change Password',
    },
  ]);
  const [dataSupport, setDataSupport] = useState([
    {
      id: '1',
      selected: false,
      icon: contacticon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: `Contact Us`,
    },
    {
      id: '2',
      selected: true,
      icon: ratingicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Rate the app',
    },
  ]);
  const [dataSetting, setDataSetting] = useState([
    {
      id: '1',
      selected: false,
      icon: langicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: `Language`,
    },
    {
      id: '2',
      selected: true,
      icon: settingicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Account Preferences',
    },
    {
      id: '3',
      selected: true,
      icon: logout,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Sign out',
    },
  ]);

  const switchAccountPress = (item: any) => {
    switch (item.title) {
      case 'Personal Information':
        navigation.navigate('Profile');
        break;
      case 'Change Password':
        navigation.navigate('UpdatePassword');
        break;
      case 'Notifications':
        navigation.navigate('Notification');
        break;
      case 'Payments':
        navigation.navigate('Payment');
        break;
      default:
        break;
    }
  };
  const switchSupportPress = (item: any) => {
    switch (item.title) {
      case 'Contact Us':
        navigation.navigate('ContactUs');
        break;

      default:
        break;
    }
  };
  const switchSettingPress = (item: any) => {
    switch (item.title) {
      case 'Account Preferences':
        navigation.navigate('AccountPreference');
        break;
      case 'Sign out':
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Auth' }],
          })
        );
        break;
      default:
        break;
    }
  };

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

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.containerMain}>
          <Image
            source={logowithoutarbi}
            resizeMode={'contain'}
            style={{
              // backgroundColor: 'green',
              width: WP(62),
              height: HP(13),
            }}
          />
          <Text
            style={{
              fontSize: 30,
              paddingVertical: 8,
              fontFamily: Fonts.RobotoBold,
              color: theme.colors.primary,
            }}>
            {'Abdul Hassan'}
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontFamily: Fonts.RobotoBold,
              color: '#353535',
            }}>
            {'Your Account'}
          </Text>

          {data.map((item) => (
            <TouchableOpacity
              onPress={() => switchAccountPress(item)}
              style={{ marginTop: 5, alignItems: 'center' }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  paddingVertical: 1,
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={item.icon}
                  resizeMode={'contain'}
                  style={{
                    height: HP(5),
                    width: WP(5),
                  }}
                />
                <Text
                  style={{
                    flex: 7,
                    left: 12,
                    fontSize: 15,
                    fontFamily: Fonts.RobotoRegular,
                    color: '#353535',
                  }}>
                  {item.title}
                </Text>
                <Icon
                  name={'right'}
                  type={'antdesign'}
                  size={20}
                  onPress={() => setShowPassword(true)}
                  color={'#868686'}
                  tvParallaxProperties={undefined}
                />
              </View>
              <View
                style={{
                  width: '95%',
                  height: 1,
                  backgroundColor: '#E3DBDB',
                }}
              />
            </TouchableOpacity>
          ))}
          <Text
            style={{
              fontSize: 19,
              fontFamily: Fonts.RobotoBold,
              color: '#353535',
              top: 5,
              paddingVertical: 8,
            }}>
            {'Support'}
          </Text>

          {dataSupport.map((item) => (
            <TouchableOpacity
              onPress={() => switchSupportPress(item)}
              style={{ marginTop: 5, alignItems: 'center' }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  paddingVertical: 3,
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={item.icon}
                  resizeMode={'contain'}
                  style={{
                    height: HP(5),
                    width: WP(5),
                  }}
                />
                <Text
                  style={{
                    flex: 7,
                    left: 12,
                    fontSize: 15,
                    fontFamily: Fonts.RobotoRegular,
                    color: '#353535',
                  }}>
                  {item.title}
                </Text>
                <Icon
                  name={'right'}
                  type={'antdesign'}
                  size={20}
                  onPress={() => setShowPassword(true)}
                  color={'#868686'}
                  tvParallaxProperties={undefined}
                />
              </View>
              <View
                style={{
                  width: '95%',
                  height: 1,
                  backgroundColor: '#E3DBDB',
                }}
              />
            </TouchableOpacity>
          ))}
          <Text
            style={{
              fontSize: 19,
              fontFamily: Fonts.RobotoBold,
              color: '#353535',
              top: 5,
              paddingVertical: 8,
            }}>
            {'Setting'}
          </Text>

          {dataSetting.map((item) => (
            <TouchableOpacity
              onPress={() => switchSettingPress(item)}
              style={{ marginTop: 5, alignItems: 'center' }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  paddingVertical: 3,
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={item.icon}
                  resizeMode={'contain'}
                  style={{
                    height: HP(5),
                    width: WP(5),
                  }}
                />
                <Text
                  style={{
                    flex: 7,
                    left: 12,
                    fontSize: 15,
                    fontFamily: Fonts.RobotoRegular,
                    color: '#353535',
                  }}>
                  {item.title}
                </Text>
                <Icon
                  name={'right'}
                  type={'antdesign'}
                  size={20}
                  onPress={() => setShowPassword(true)}
                  color={'#868686'}
                  tvParallaxProperties={undefined}
                />
              </View>
              <View
                style={{
                  width: '95%',
                  height: 1,
                  backgroundColor: '#E3DBDB',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;
function setShowPassword(arg0: boolean): void {
  throw new Error('Function not implemented.');
}


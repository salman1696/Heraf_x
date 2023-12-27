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
  ScrollView,
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
import DeviceInfo from 'react-native-device-info';


const Profile = ({ navigation }) => {
  const [month, setMonth] = useState('');
  const [data, setData] = useState([
    {
      id: '1',
      selected: false,
      icon: 'filetext1',
      label: 'Course',
      desc: 'Not enrolled yet',
      family: 'antdesign',
    },
    {
      id: '2',
      selected: false,
      icon: 'idcard',
      label: 'Govt. ID',
      desc: '26863400752',
      family: 'antdesign',
    },
    {
      id: '3',
      selected: false,
      icon: 'email',
      label: 'Email Address',
      desc: 'Abdullahhassan@gmail.com',
      family: 'fontisto',
    },
    {
      id: '4',
      selected: false,
      icon: 'phone',
      label: 'Contact Number',
      desc: '56 333 9716',
      family: 'antdesign',
    },
    {
      id: '5',
      selected: false,
      icon: 'map-pin',
      label: 'Address',
      desc: 'City, Integer turpis quam  Street ,laoreet id orci nec Block ,  laoreet id',
      family: 'feather',
    },
    {
      id: '6',
      selected: false,
      icon: 'graduation-cap',
      label: 'Educational Background',
      desc: 'Empty',
      family: 'entypo',
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
          title={'Profile'}
          userText={'Hassan Bin Ahmad'}
          back={'yes'}
          navigation={navigation}
        />
        <ScrollView style={{ flex: 1, top: 5 }}>
          <View
            style={{
              alignSelf: 'center',
              width: '92%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={avatar}
              resizeMode={'contain'}
              style={{
                width: WP(25),
                height: HP(15),
              }}
            />
            <View
              style={{
                right: WP(10),
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 22,
                  fontFamily: Fonts.RobotoBold,
                  color: theme.colors.primary,
                }}>
                {'Abdul Hassan'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: Fonts.RobotoRegular,
                    color: theme.colors.secondary,
                  }}>
                  {'Student'}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItem: 'center',
                    marginLeft: 20,
                  }}>
                  <Image
                    source={check_circle}
                    resizeMode={'contain'}
                    style={{
                      width: 17,
                      height: 17,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontStyle: 'italic',
                      fontFamily: Fonts.RobotoRegular,
                      color: '#35b00a',
                    }}>
                    {'verified'}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileDetail')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginEnd: 10,
              }}>
              <Icon
                style={{ top: 3 }}
                name={'edit'}
                type={'antdesign'}
                size={20}
                color={'#868690'}
              />
              <Text
                style={{
                  fontSize: 13,
                  paddingVertical: 2,
                  fontFamily: Fonts.RobotoRegular,
                  color: theme.colors.primary,
                }}>
                {'Edit'}
              </Text>
            </TouchableOpacity>
          </View>

          {data.map((item) => {
            return (
              <View
                style={{
                  padding: 10,
                  marginHorizontal: 5,
                  flexDirection: 'row',
                }}>
                <Icon
                  style={{ top: 3 }}
                  name={item.icon}
                  type={item.family}
                  size={20}
                  color={'#868690'}
                />
                <View
                  style={{
                    paddingHorizontal: 10,
                    marginHorizontal: 5,
                  }}>
                  <Text
                    style={{
                      paddingVertical: 2,
                      fontSize: 17,
                      fontWeight: '900',
                      fontFamily: Fonts.RobotoRegular,
                      color: theme.colors.primary,
                    }}>
                    {item.label}
                  </Text>
                  <Text
                    style={{
                      marginEnd: 50,
                      paddingVertical: 2,
                      fontFamily: Fonts.RobotoRegular,
                      color: theme.colors.subTextColor,
                    }}>
                    {item.desc}
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

export default Profile;

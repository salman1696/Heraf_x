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
  update_password,
} from '../../../../../assets';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import { AppHeaderBack, Button } from '../../../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

import DeviceInfo from 'react-native-device-info';
import styles from './styles';
import { HP, WP } from '../../../../../utils';
import { Input } from 'react-native-elements';
import { HEADER_HEIGHT } from '../../../../../utils/Constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const UpdatePassword = ({ navigation }: { navigation: any }) => {
  const [showUpdate, setShowUpdate] = useState(true);
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

  const CText = ({ value }: { value: any }) => {
    return (
      <Text
        style={{
          paddingVertical: 2,
          fontSize: 13,
          fontWeight: '100',
          fontFamily: Fonts.RobotoRegular,
          color: theme.colors.textColor,
        }}>
        {value}
      </Text>
    );
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
      <View style={styles.containerMain}>
        <AppHeaderBack
          title={'Update Password'}
          back={'yes'}
          navigation={navigation}
        />
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
         >
          <View style={{ flex: 0.86, top: 5 }}>
            <View
              style={{
                flex: DeviceInfo.hasNotch() ? 0.1 : 0.1,
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={update_password}
                resizeMode={'contain'}
                style={{
                  width: WP(40),
                  height: HP(32),
                }}
              />
            </View>

            {showUpdate ? (
              <View
                style={{
                  padding: 10,
                  bottom: Platform.OS === 'ios' ? 0 : 30,
                  width: '100%',
                  position: 'absolute',
                  backgroundColor: '#F6F6F6',
                  // backgroundColor: '#777',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  shadowColor: 'gray',
                  // shadowOffset: {width: 5, height: 5},
                  shadowOpacity: 0.3,
                  borderColor: '#353535',
                  shadowRadius: 10,
                  elevation: 4,
                  borderTopColor: theme.colors.textColor,
                }}>
                <Text
                  style={{
                    paddingVertical: 10,
                    fontSize: 19,
                    fontWeight: '800',
                    textAlign: 'center',
                    fontFamily: Fonts.RobotoRegular,
                    color: theme.colors.textColor,
                  }}>
                  {'Update Password'}
                </Text>
                <View
                  style={{
                    paddingHorizontal: 10,
                    width: '105%',
                    height: 80,
                  }}>
                  <CText value={'Enter Current Password'} />
                  <Input
                    inputContainerStyle={{
                      borderWidth: 1,
                      end: 10,
                      paddingHorizontal: 2,
                      borderColor: '#00000032',
                      borderRadius: 4,
                    }}
                    // onChangeText={(text) => setName(text)}
                    inputStyle={styles.input}
                    placeholder={' Current Password'}
                  />
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    width: '105%',
                    height: 80,
                  }}>
                  <CText value={'Enter New Password'} />
                  <Input
                    inputContainerStyle={{
                      borderWidth: 1,
                      end: 10,
                      paddingHorizontal: 2,
                      borderColor: '#00000032',
                      borderRadius: 4,
                    }}
                    // onChangeText={(text) => setName(text)}
                    inputStyle={styles.input}
                    placeholder={' New Password'}
                  />
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    width: '105%',
                    height: 80,
                  }}>
                  <CText value={'Confirm New Password'} />
                  <Input
                    inputContainerStyle={{
                      paddingHorizontal: 2,
                      borderWidth: 1,
                      end: 10,
                      borderColor: '#00000032',
                      borderRadius: 4,
                    }}
                    // onChangeText={(text) => setName(text)}
                    inputStyle={styles.input}
                    placeholder={'Confirm Password'}
                  />
                </View>

                <Button
                  title={'UPDATE'}
                  textColor={theme.colors.white}
                  backgroundColor={theme.colors.primary}
                  style={{
                    bottom: 30,
                    marginHorizontal: 10,
                    left: 0,
                  }}
                  onPress={() => setShowUpdate(false)} loading={undefined}              // loading={loading}
                />
              </View>
            ) : (
              <>
                <Text
                  style={{
                    paddingVertical: 19,
                    fontSize: 19,
                    fontWeight: '800',
                    textAlign: 'center',
                    fontFamily: Fonts.RobotoRegular,
                    color: theme.colors.textColor,
                  }}>
                  {'Updated Password'}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '100',
                    textAlign: 'center',
                    fontFamily: Fonts.RobotoRegular,
                    color: theme.colors.textColor,
                  }}>
                  {'Your password has been reset successfully'}
                </Text>
                <Button
                  title={'Go to Dashboard'}
                  textColor={theme.colors.white}
                  backgroundColor={theme.colors.primary}
                  style={{
                    bottom: 0,
                    marginHorizontal: 100,
                    left: 0,
                  }}
                  onPress={() => setShowUpdate(true)} loading={undefined}              // loading={loading}
                />
              </>
            )}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default UpdatePassword;

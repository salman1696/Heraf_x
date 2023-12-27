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
  contact_img,
  course_horizontal_img,
  setting_img,
  update_password,
} from '../../../../../assets';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import { AppHeaderBack, Button } from '../../../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { HP, WP } from '../../../../../utils';
import { Icon, Input } from 'react-native-elements';
import { HEADER_HEIGHT } from '../../../../../utils/Constants';
import DeviceInfo from 'react-native-device-info';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ContactUs = ({ navigation }: { navigation: any }) => {
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
          marginLeft: 10,
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
          title={'Contact Us'}
          back={'yes'}
          navigation={navigation} />

        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: DeviceInfo.hasNotch() ? 0.85 : 0.78, top: 5 }}>
            <View
              style={{
                flex: DeviceInfo.hasNotch() ? 0.6 : 0.1,
                alignItems: "center",
                justifyContent: 'center',
              }}>
              <Image
                source={contact_img}
                resizeMode={'contain'}
                style={{
                  width: 200,

                  height: 140,
                }}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{

                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    borderRadius: 8,
                    marginEnd: 10,
                    borderWidth: 0.5,
                    borderColor: theme.colors.lightGray,
                    backgroundColor: 'white',
                    shadowColor: 'gray',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    elevation: 4,
                  }}>
                  <View
                    style={{
                      alignSelf: 'center',
                      borderRadius: 65,
                      padding: 5,
                      borderWidth: 1,
                      borderColor: theme.colors.secondary,
                    }}>
                    <Icon
                      name='mobile'
                      type='entypo'
                      color={theme.colors.secondary}
                      size={14} tvParallaxProperties={undefined} />
                  </View>
                  <Text
                    style={{
                      marginTop: 4,
                      fontSize: 16,
                      fontWeight: '800',
                      textAlign: 'center',
                      fontFamily: Fonts.RobotoBold,
                      color: theme.colors.secondary,
                    }}>
                    {'Call Us'}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    borderRadius: 8,
                    borderWidth: 0.5,
                    borderColor: theme.colors.lightGray,
                    backgroundColor: 'white',
                    shadowColor: 'gray',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    elevation: 4,
                  }}>
                  <View
                    style={{
                      alignSelf: 'center',
                      borderRadius: 65,
                      padding: 5,
                      borderWidth: 1,
                      borderColor: theme.colors.primary,
                    }}>
                    <Icon
                      name='email'
                      type='fontisto'
                      color={theme.colors.primary}
                      size={14} tvParallaxProperties={undefined} />
                  </View>
                  <Text
                    style={{
                      marginTop: 4,
                      fontSize: 16,
                      fontWeight: '800',
                      textAlign: 'center',
                      fontFamily: Fonts.RobotoBold,
                      color: theme.colors.primary,
                    }}>
                    {'Email Us'}
                  </Text>
                </View>
              </View>
            </View>

            {showUpdate ? (
              <View
                style={{
                  padding: 10,
                  bottom: 0,
                  paddingBottom: Platform.OS === 'ios' ? 0 : 30,
                  width: '100%',
                  position: 'absolute',
                  backgroundColor: '#EEEEEE',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderColor: '#353535',
                  borderTopColor: theme.colors.textColor,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.4,
                  shadowRadius: 10,
                  elevation: 10,
                }}>
                <Text
                  style={{
                    paddingVertical: Platform.OS === 'ios' ? 10 : 10,
                    fontSize: 19,
                    fontWeight: '800',
                    textAlign: 'center',
                    fontFamily: Fonts.RobotoRegular,
                    color: theme.colors.textColor,
                  }}>
                  {'Any Question?'}
                </Text>
                <View
                  style={{
                    paddingHorizontal: 10,
                    width: '100%',
                    height: 110,
                  }}>
                  <CText value={'Write your message'} />
                  <Input
                    inputContainerStyle={{
                      borderWidth: 1,
                      paddingHorizontal: 2,
                      borderColor: '#00000032',
                      backgroundColor: 'white',

                      height: Platform.OS === 'ios' ? 110 : 140,
                      alignSelf: 'flex-start',
                      borderRadius: 4,
                    }}
                    // onChangeText={(text) => setName(text)}
                    inputStyle={{
                      borderBottomColor: theme.colors.borderColorGray,

                      paddingHorizontal: 5,
                      backgroundColor: 'white',
                      fontFamily: Fonts.RobotoRegular,
                      alignSelf: 'flex-start',
                      fontSize: 13,
                    }}
                    placeholder={'Enter the message...'}
                  />
                </View>

                <Button
                  title={'SEND'}
                  textColor={theme.colors.white}
                  backgroundColor={theme.colors.primary}
                  style={{
                    bottom: 7,
                    alignSelf: 'flex-end',
                    width: '30%',
                    marginEnd: 20,
                  }}
                  onPress={() => setShowUpdate(false)} loading={undefined}                // loading={loading}
                />
              </View>
            ) : null}
          </View>
        </KeyboardAwareScrollView>
      </View >
    </View >
  );
};

export default ContactUs;

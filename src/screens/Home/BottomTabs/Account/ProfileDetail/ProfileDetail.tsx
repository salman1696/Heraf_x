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
import { Icon, Input } from 'react-native-elements';
import { HEADER_HEIGHT } from '../../../../../utils/Constants';

const ProfileDetail = ({ navigation }: { navigation: any }) => {
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

  const CText = ({ value }) => {
    return (
      <Text
        style={{
          paddingVertical: 2,
          fontSize: 13,
          fontWeight: '100',
          fontFamily: Fonts.RobotoRegular,
          color: theme.colors.subTextColor,
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
          title={'Profile'}
          back={'yes'}
          navigation={navigation}
        />

        <View style={{ flex: 0.9, top: 5 }}>
          <ScrollView style={{
            flex: 1
          }}>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
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
                  position: 'absolute',
                  bottom: 15,
                  right: 0,
                  backgroundColor: theme.colors.primary,
                  padding: 7,
                  borderRadius: 20,
                  borderColor: 'lightgray',
                  borderWidth: 1,
                }}>
                <Icon
                  name={'camera-outline'}
                  type={'material-community'}
                  color={theme.colors.white}
                  size={16} tvParallaxProperties={undefined} />
              </View>
            </View>

            <View
              style={{
                padding: 10,
                marginHorizontal: 5,
              }}>
              <View
                style={{
                  paddingHorizontal: 10,
                  width: '105%',
                  height: 80,
                }}>
                <CText value={'First Name'} />
                <Input
                  inputContainerStyle={{
                    borderWidth: 1,
                    end: 10,
                    borderColor: '#00000032',
                    borderRadius: 4,
                  }}
                  // onChangeText={(text) => setName(text)}
                  inputStyle={styles.input}
                  placeholder={'First Name'}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 10,
                  width: '105%',
                  height: 80,
                }}>
                <CText value={'Middle Name'} />
                <Input
                  inputContainerStyle={{
                    borderWidth: 1,
                    end: 10,
                    borderColor: '#00000032',
                    borderRadius: 4,
                  }}
                  // onChangeText={(text) => setName(text)}
                  inputStyle={styles.input}
                  placeholder={'Middle Name'}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 10,
                  width: '105%',
                  height: 80,
                }}>
                <CText value={'Last Name'} />
                <Input
                  inputContainerStyle={{
                    borderWidth: 1,
                    end: 10,
                    borderColor: '#00000032',
                    borderRadius: 4,
                  }}
                  // onChangeText={(text) => setName(text)}
                  inputStyle={styles.input}
                  placeholder={'Last Name'}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 10,
                  width: '105%',
                  height: 80,
                }}>
                <CText value={'Phone No.'} />
                <Input
                  inputContainerStyle={{
                    borderWidth: 1,
                    end: 10,
                    borderColor: '#00000032',
                    borderRadius: 4,
                  }}
                  // onChangeText={(text) => setName(text)}
                  inputStyle={styles.input}
                  placeholder={'Please enter number'}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 10,
                  height: 80,
                  width: '105%',
                }}>
                <CText value={'Address'} />
                <Input
                  inputContainerStyle={{
                    borderWidth: 1,
                    end: 10,
                    justifyContent: 'flex-start',
                    maxHeight: 150,
                    borderColor: '#00000032',
                    borderRadius: 4,
                  }}
                  // onChangeText={(text) => setName(text)}
                  inputStyle={styles.input}
                  placeholder={'Please enter number'}
                />
              </View>

              <View
                style={{
                  alignSelf: 'flex-start',
                  left: 10,
                }}>
                <Button
                  title={'UPDATE'}
                  textColor={theme.colors.white}
                  backgroundColor={theme.colors.primary}
                  style={{
                    bottom: 30,
                    paddingHorizontal: 20,
                    left: 0,
                  }} loading={undefined}              // onPress={() => navigation.navigate('Signup')}
                // loading={loading}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetail;

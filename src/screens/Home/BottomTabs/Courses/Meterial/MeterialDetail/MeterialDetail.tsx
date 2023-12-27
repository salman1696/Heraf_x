/** @format */

import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import {
  avatar,
  car,
  course_horizontal_img,
  download_icon,
  lec_img,
  nextunfill,
  pdf,
  word,
} from '../../../../../../assets';
import CalendarStrip from 'react-native-calendar-strip';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import moment from 'moment';
import { useRef } from 'react';
import { HP, WP } from '../../../../../../utils';
import theme from '../../../../../../theme';
import { Fonts } from '../../../../../../utils/Fonts';
import styles from './styles';
import { AppHeaderBack } from '../../../../../../components';
import Lectures from '../../Lectures';
import { HEADER_HEIGHT } from '../../../../../../utils/Constants';
import { Icon } from 'react-native-elements';
import { UploadModal } from '../../../../../../components/Modal/UploadModal';
import DeviceInfo from 'react-native-device-info';

const MeterialDetail = ({ navigation }: { navigation: any }) => {
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
  //modal
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const DownloadList = ({ title, upload, desc, item }: {
    title: any, upload: any, desc: any, item: any
  }) => {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 0.87, left: 6, padding: 10 }}>
            <Text
              style={{
                paddingVertical: 3,
                fontFamily: Fonts.RobotoRegular,
                fontWeight: '700',
                color: theme.colors.textColor,
              }}>
              {'Car Diagnostic & Engine Analysis'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 3,
              }}>
              <Image
                source={pdf}
                resizeMode={'contain'}
                style={{
                  padding: 5,
                  marginEnd: 8,
                  height: HP(2),
                  width: WP(2),
                }}
              />
              <Text
                style={{
                  fontFamily: Fonts.RobotoRegular,
                  fontSize: 12,
                  fontWeight: '100',
                  color: theme.colors.textColor,
                }}>
                {'PDF'}
              </Text>
              <Image
                source={word}
                resizeMode={'contain'}
                style={{
                  padding: 5,
                  marginHorizontal: 8,
                  margin: 5,
                  height: HP(2),
                  width: WP(2),
                }}
              />
              <Text
                style={{
                  fontFamily: Fonts.RobotoRegular,
                  fontSize: 12,
                  fontWeight: '100',
                  color: theme.colors.textColor,
                }}>
                {'WORD'}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: Fonts.RobotoRegular,
                fontSize: 9,
                fontWeight: '100',
                color: theme.colors.subTextColor,
              }}>
              {'Updated on: Dec 07, 2021'}
            </Text>
          </View>

          <View
            style={{
              flex: 0.13,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={download_icon}
              resizeMode={'contain'}
              style={{
                height: HP(6),
                width: WP(6),
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#35353535',
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.main}>
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

      <AppHeaderBack
        title={'Course Material'}
        back={'yes'}
        navigation={navigation}
      />
      <View
        style={{
          padding: 13,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', }}>
          <Image
            source={lec_img}
            resizeMode={'contain'}
            style={{
              height: HP(2.8),
              width: WP(3.6),
            }}
          />
          <Text
            style={{
              left: 5,
              fontSize: 17,
              fontFamily: Fonts.RobotoBold,
              color: theme.colors.textColor,
            }}>
            {'Lectures'}
          </Text>
        </View>
        <View style={{ backgroundColor: theme.colors.secondary, borderRadius: 65, }}>
          <Icon
            style={{
              alignSelf: 'center',
            }}
            onPress={() => setModalVisible(true)}
            iconStyle={{ padding: 4.5, }}
            name={'plus'}
            type={'antdesign'}
            size={20}
            color={'white'} tvParallaxProperties={undefined} />

        </View>
      </View>
      <View
        style={{ width: '100%', height: 1, backgroundColor: '#35353535' }}
      />
      {data.map((item) => {
        return <DownloadList title={undefined} upload={undefined} desc={undefined} item={undefined} />;
      })}

      <UploadModal
        toggleModal={toggleModal}
        modalVisible={isModalVisible}
        headingText={'Welcome to Heraf'}
        subHeadingText={'You can now access your Dashboard.'}
        text={
          'Check out our awesome features to which helps you get placed in your dream company!'
        }
        onChangeLanguage={undefined}
        onDone={toggleModal}
      />
    </View>
  );
};

export default MeterialDetail;

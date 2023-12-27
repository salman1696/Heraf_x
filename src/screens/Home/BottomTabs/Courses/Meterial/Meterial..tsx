/** @format */

import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
  course_horizontal_img,
  lec_img,
  nextunfill,
} from '../../../../../assets';
import { HP, WP } from '../../../../../utils';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import DeviceInfo from 'react-native-device-info';


const Meterial = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [userOrder, setUserOrder] = React.useState('');

  const UpCommingLectures = ({ title, upload, desc, item }: { title: any, upload: any, desc: any, item: any }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('MeterialDetail')}
        style={{
          flex: 0.5,
          borderRadius: 8,
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.1,
          borderColor: '#353535',
          shadowRadius: 10,
          backgroundColor: 'white',
          padding: 10,
          paddingHorizontal: WP(5),
          margin: WP(2),
        }}>
        <View style={{ paddingHorizontal: 5 }}>
          <Image
            source={lec_img}
            resizeMode={'contain'}
            style={{
              width: WP(9),
              height: HP(7),
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: Fonts.RobotoRegular,
            fontSize: 18,
            fontWeight: '700',
            color: theme.colors.textColor,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.RobotoBold,
            fontSize: 14,
            fontWeight: '500',
            color: '#868686',
          }}>
          {upload}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.RobotoBold,
            fontSize: 14,
            fontWeight: '500',
            color: '#868686',
          }}>
          {desc}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              color: theme.colors.secondary,
            }}>
            {item}
          </Text>
          <TouchableOpacity>
            <Image
              source={nextunfill}
              resizeMode={'contain'}
              style={{
                height: HP(5),
                width: WP(9),
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: DeviceInfo.hasNotch() ? 0.86 : 0.82 }}>
      <ScrollView
        style={{
          backgroundColor: 'white',
        }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <UpCommingLectures
            title={'Lectures'}
            upload={'Recent upload'}
            desc={'Lecture 09'}
            item={'15 Lectures'}
          />
          <UpCommingLectures
            title={'Assignments'}
            upload={'Last Upload'}
            desc={'3 Nov 2021 12:06 AM'}
            item={'10 Assignments'}
          />
        </View>
        <UpCommingLectures
          title={'Quizes'}
          upload={'Recent upload'}
          desc={'3 Nov 2021 12:06 AM'}
          item={'5 Quizes'}
        />
      </ScrollView>
    </View>
  );
};

export default Meterial;

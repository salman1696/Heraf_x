import React, { Component } from 'react';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import { homeicon, nextfill, nextunfill } from '../../assets';
const {
  TouchableOpacity,
  Image,
  Text,
  View,
  ImageBackground,
} = require('react-native');
const { default: theme } = require('../../theme');
const { WP, HP } = require('../../utils');
const { Fonts } = require('../../utils/Fonts');

const AllCourseItem = ({ item, onPress, lastItem }: { item: any, onPress: any, lastItem: any }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      flexDirection: 'row',
      margin: WP(1),
      justifyContent: 'space-evenly',
      backgroundColor: 'white',
      shadowColor: 'gray',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      alignItems: 'center',
      alignSelf: 'center',
      elevation: 5,
      borderRadius: 5,
      marginBottom: lastItem === 9 ? 24 : null,
    }}>
    <ImageBackground
      source={item.icon}
      imageStyle={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
      style={{
        height: HP(18.3),
        width: WP(40.8),
      }}
    />
    <View
      style={{
        width: '55%',
        // backgroundColor: 'red',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          marginVertical: 5,
          width: WP(25),
          borderRadius: 3,
          borderWidth: 1,
          borderColor: theme.colors.secondary,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 11.5,
            fontFamily: Fonts.RobotoBold,
            color: theme.colors.secondary,
          }}>
          {'6 Months Training'}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 15.5,
          fontFamily: Fonts.RobotoBold,
          color: theme.colors.primary,
        }}>
        {item.title}
      </Text>

      <Text
        style={{
          fontFamily: Fonts.RobotoRegular,
          fontSize: 12,
          paddingVertical: 5,
          color: '#868686',
        }}>
        {item.desc}
      </Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Text
          style={{
            fontFamily: Fonts.RobotoBold,
            color: '#595959',
          }}>
          {item.price}
        </Text>
        <Text
          style={{
            textDecorationLine: 'line-through',
            marginLeft: 20,
            fontFamily: Fonts.RobotoBold,
            color: '#868686',
          }}>
          {item.oldPrice}
        </Text>
      </View>
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: theme.colors.secondary,
          width: '100%',
          paddingVertical: 6,
          borderRadius: 3,
          marginVertical: 8,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: Fonts.RobotoBold,
            color: 'white',
            fontSize: 9.53,
          }}>
          {'VIEW DETAIL'}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
export { AllCourseItem };

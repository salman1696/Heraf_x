import React, {Component} from 'react';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
import {homeicon, nextfill, nextunfill} from '../../assets';
const {
  TouchableOpacity,
  Image,
  Text,
  View,
  ImageBackground,
} = require('react-native');
const {default: theme} = require('../../theme');
const {WP, HP} = require('../../utils');
const {Fonts} = require('../../utils/Fonts');

const PopularCourseItem = ({item, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      width: ScreenWidth / 2.7,
      margin: WP(1),
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: 'white',
      shadowColor: '#DDDDDD',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 5,
      borderRadius: 5,
    }}>
    <ImageBackground
      source={item.icon}
      imageStyle={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}
      style={{
        height: HP(12),
        width: WP(36.8),
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
      <View
        style={{
          margin: 8,
          justifyContent: 'flex-start',
          width: WP(22),
          padding: 2,
          borderRadius: 3,
          backgroundColor: '#00000090',
          borderWidth: 1,
          borderColor: 'white',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 10,
            fontFamily: Fonts.RobotoBold,
            letterSpacing: 0.2,
            color: theme.colors.white,
          }}>
          {'6 Months Training'}
        </Text>
      </View>
      <View
        style={{
          margin: 8,
          width: WP(10),
          borderRadius: 3,
          borderWidth: 1,
          backgroundColor: '#00000090',
          borderColor: 'white',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 10,
            fontFamily: Fonts.RobotoBold,
            color: theme.colors.white,
          }}>
          {item.price}
        </Text>
      </View>
    </ImageBackground>
    <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
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
          fontSize: 11,
          paddingVertical: 3,
          color: '#868686',
          letterSpacing: 0.1,
        }}>
        {item.desc}
      </Text>
      {/* <View
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
            color: '#59595950',
          }}>
          {item.oldPrice}
        </Text>
      </View> */}
    </View>
    {/* <View
      style={{
        alignSelf: 'center',
        backgroundColor: theme.colors.secondary,
        width: '90%',
        paddingVertical: 6,
        borderRadius: 3,
        marginBottom: 10,
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
    </View> */}
  </TouchableOpacity>
);
export {PopularCourseItem};

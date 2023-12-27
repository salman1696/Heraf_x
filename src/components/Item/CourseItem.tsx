import React, {Component} from 'react';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
import {nextfill, nextunfill} from '../../assets';
const {TouchableOpacity, Image, Text, View} = require('react-native');
const {default: theme} = require('../../theme');
const {WP, HP} = require('../../utils');
const {Fonts} = require('../../utils/Fonts');

const CourseItem = ({item, onPress, onPressArrow, lastItem}) => {
  console.log(lastItem, item.id.toString());
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: ScreenWidth / 2.2,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingTop: 12,
        paddingBottom: 7,
        margin: WP(1.6),
        backgroundColor: item.selected ? theme.colors.secondary : '#FDFFFE',
        shadowColor: '#000',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.1,
        borderColor: '#353535',
        shadowRadius: 10,
        elevation: 10,
        borderRadius: 5,
        alignItems: 'flex-start',
      }}>
      <Image
        source={item.icon}
        resizeMode={'contain'}
        style={{
          tintColor: item.selected ? 'white' : theme.colors.secondary,
          height: HP(7),
          width: WP(10),
          paddingVertical: 25,
        }}
      />
      <Text
        style={{
          fontSize: 14.4,
          fontFamily: Fonts.RobotoBold,
          color: item.selected ? theme.colors.white : theme.colors.textColor,
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          fontSize: 10.4,
          paddingVertical: 5,
          color: item.selected ? theme.colors.white : theme.colors.textColor,
        }}>
        {item.desc}
      </Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: Fonts.RobotoBold,
            color: item.selected ? theme.colors.white : theme.colors.secondary,
          }}>
          {item.courses}
        </Text>
        <TouchableOpacity onPress={onPressArrow}>
          <Image
            source={item.selected ? nextfill : nextunfill}
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
export {CourseItem};

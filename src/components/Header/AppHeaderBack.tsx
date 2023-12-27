/** @format */

import React from 'react';
import { Text, Image, StyleSheet, TextInput, Platform } from 'react-native';
import propTypes from 'prop-types';
import { Fonts } from '../../utils/Fonts';
import theme from '../../theme';
import { Icon } from 'react-native-elements';
// import {color} from 'react-native-reanimated';
import { View } from 'react-native';

import { bellicon, findicon, logoicon } from '../../assets';
import { HP, WP } from '../../utils';

const AppHeaderBack = ({
  title,
  back,
  navigation,

}: {
  title: any,
  back: any,
  navigation: any,
}) => {
  const { iconStyle, titleStyle, containerStyle } = styles;

  return (
    <View
      style={{
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 7,
      }}>
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          padding: 5,
          marginTop: 5,
          paddingLeft: 10,
          alignItems: 'center',
        }}>
        <Image
          source={logoicon}
          resizeMode={'contain'}
          style={{ height: 42, width: 42, marginHorizontal: 5 }}
        />
        <View
          style={{
            margin: 10,
            width: '75.5%',
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 5,
            // backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#35353530',
          }}>
          <TextInput
            style={{
              flex: 1,
              left: 15,
              top: 2,
              // backgroundColor: 'blue',
              fontSize: 12,
              height: 33,
              justifyContent: 'center',
            }}
            placeholder={'Explore Heraf'}
            placeholderTextColor={'#35353580'}
          />
          <Image
            source={findicon}
            resizeMode={'contain'}
            style={{
              justifyContent: 'flex-end',
              height: HP(3),
              width: WP(4),
              marginHorizontal: 5,
              right: 5,
            }}
          />
        </View>
        <Image
          source={bellicon}
          resizeMode={'contain'}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            height: HP(2.5),
            width: WP(3),
            marginHorizontal: 2,
          }}
        />
      </View>

      <View
        style={{
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {back !== null && (
          <Icon
            style={{ marginHorizontal: 6, top: 1 }}
            name='chevron-back'
            type='ionicon'
            color='#353535'
            size={18}
            onPress={() => navigation.goBack()} tvParallaxProperties={undefined} />
        )}

        <Text
          style={{
            margin: 5,
            fontFamily: Fonts.RobotoBold,
            fontSize: 19,
            color: '#353535',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const margin = 10;
const styles = StyleSheet.create({
  iconStyle: {
    width: 25,
    height: 25,
    marginRight: 6,
    margin,
    tintColor: theme.colors.white,
  },
  titleStyle: {
    //  fontFamily: Fonts.GoogleSansBold,
  },

  badgeContainer: {
    position: 'absolute',
    top: -8,
    right: 2,
    zIndex: 10,
    width: WP('5'),
    height: HP('4'),
  },
  containerStyle: {
    paddingTop: 0,
    height: Platform.select({
      android: 56,
      default: 45,
      ios: 60,
    }),
    borderBottomWidth: 0,
  },
});

AppHeaderBack.propTypes = {
  right: propTypes.any,
  name: propTypes.any,
  size: propTypes.any,
  type: propTypes.any,
  left: propTypes.any,
  title: propTypes.any,
  icon: propTypes.any,
  onRightPress: propTypes.func,
  onLeftPress: propTypes.func,
  transparent: propTypes.bool,
};

export { AppHeaderBack };

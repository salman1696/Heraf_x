import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import propTypes from 'prop-types';
import { Fonts } from '../../utils/Fonts';
import theme from '../../theme';
// import {color} from 'react-native-reanimated';
import { View } from 'react-native';

import { avatar, bellicon, findicon, homeicon } from '../../assets';
import { HP, WP } from '../../utils';

const AppHeader = ({
  title,
  userText,

}: {
  title: any,
  userText: any,
}) => {
  const { iconStyle, titleStyle, containerStyle } = styles;

  //  alert(cartItems.length);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 7,
      }}>
      <View
        style={{
          height: 45,
          flexDirection: 'row',
          padding: 5,
          marginVertical: 5,
          paddingLeft: 17,
          alignItems: 'center',
        }}>
        <Image
          source={homeicon}
          resizeMode={'contain'}
          style={{ height: 21, width: 20, marginHorizontal: 5 }}
        />
        <Text
          style={{
            margin: 5,
            fontFamily: Fonts.RobotoBold,
            fontSize: 19,
            color: theme.colors.textColor,
          }}>
          {title}
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={avatar}
          resizeMode={'contain'}
          style={{
            flex: 1,
            height: HP(11),
            width: WP(19),
            marginHorizontal: 5,
            left: 5,
          }}
        />

        <View style={{ flex: 3, left: 10 }}>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 16,
              color: theme.colors.primary,
            }}>
            {userText}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.RobotoRegular,
              fontSize: 14,
              color: theme.colors.subTextColor,
            }}>
            {'Welcome to your dashboard'}
          </Text>
        </View>
        <Image
          source={bellicon}
          resizeMode={'contain'}
          style={{
            flex: 0.5,
            justifyContent: 'flex-end',
            height: HP(3.5),
            width: WP(4),
            marginHorizontal: 5,
            left: 5,
          }}
        />
      </View>

      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          marginVertical: 15,
          borderWidth: 1,
          borderRadius: 10,
          alignItems: 'center',
          borderColor: '#35353530',
        }}>
        <Image
          source={findicon}
          resizeMode={'contain'}
          style={{
            justifyContent: 'flex-end',
            height: HP(4.8),
            width: WP(5.5),
            marginHorizontal: 5,
            left: 5,
          }}
        />
        <TextInput
          style={{ flex: 1, fontSize: 14, height: HP(5) }}
          placeholder={'Explore Heraf'}
          placeholderTextColor={'#35353580'}
        />
      </View>
    </View>
  );
};

const margin = 10;
const styles = StyleSheet.create({
  iconStyle: {
    width: 25,
    height: 25,
    margin,
    tintColor: theme.colors.white,
  },
  titleStyle: {
    //  fontFamily: Fonts.GoogleSansBold,
  },
  iconStyle: {
    marginRight: 6,
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

AppHeader.propTypes = {
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

export { AppHeader };

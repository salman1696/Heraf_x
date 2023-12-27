/** @format */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  Text,
  FlatList,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from '../Buttons/Button';
import theme from '../../theme';
import { Fonts } from '../../utils/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CustomText } from '../Text/Text';
import { ListItem, Divider } from 'react-native-elements';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import {
  cancelIcon,
  tomatoPic,
  lemonPic,
  onionPic,
  ppp,
  tttt,
  qqqq,
  welcome_img,
} from '../../assets';
import { HP, WP } from '../../utils';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
// import I18n from '../../translation';

const DATA = [
  {
    name: 'Tomato \nBurger',
    createdAt: '12:00pm',
    id: '124578956',
    price: '$70.00',
    image: tomatoPic,
  },
  {
    name: 'Tomato \nBurger',
    createdAt: '12:00pm',
    id: '124578956',
    price: '$70.00',
    image: onionPic,
  },
];

const WelcomeModal = ({
  toggleModal,
  modalVisible,
  text,
  headingText,
  subHeadingText,
  onChangeLanguage,
  onDone,
}) => {
  const { main, innerView, titleStyle } = styles;

  return (
    <Modal
      visible={modalVisible}
      animationIn='slideInUp'
      transparent
      onSwipeComplete={() => toggleModal(false)}
      onBackdropPress={() => toggleModal(false)}
      swipeDirection='up'>
      <TouchableOpacity style={main}>
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            bottom: heightPercentageToDP(30),
            marginHorizontal: 30,
            paddingVertical: 30,
            backgroundColor: theme.colors.white,
            width: '85%',
            borderRadius: 8,
          }}>
          <View>
            <Image
              source={ppp}
              resizeMode={'cover'}
              style={{
                justifyContent: 'center',
                // alignSelf: 'flex-end',
                alignItems: 'center',
                position: 'absolute',
                height: 220,
                width: 65,
                right: 0,
              }}
            />
          </View>
          <Image
            source={tttt}
            resizeMode={'contain'}
            style={{
              borderBottomLeftRadius: 8,
              justifyContent: 'center',
              alignSelf: 'flex-start',
              position: 'absolute',
              height: 65,
              width: 65,
              left: 0,
              bottom: 0,
            }}
          />
          <Image
            source={qqqq}
            resizeMode={'contain'}
            style={{
              borderTopLeftRadius: 8,
              justifyContent: 'center',
              alignSelf: 'flex-start',
              position: 'absolute',
              height: 55,
              width: 65,
              left: 0,
              top: 0,
            }}
          />
          <View
            style={{
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: Fonts.RobotoBold,
                fontSize: 23,
                color: theme.colors.textColor,
              }}>
              {headingText}
            </Text>
            {subHeadingText && (
              <Text
                style={{
                  top: 5,
                  fontFamily: Fonts.RobotoRegular,
                  fontSize: 13,
                  color: theme.colors.textColor,
                }}>
                {subHeadingText}
              </Text>
            )}
            <Image
              source={welcome_img}
              resizeMode={'cover'}
              style={{
                marginTop: 30,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                height: HP(12),
                width: '72%',
              }}
            />
            <Text
              style={{
                fontFamily: Fonts.RobotoRegular,
                fontSize: 12,
                Top: 15,
                marginHorizontal: 40,
                lineHeight: 20,
                textAlign: 'center',
                color: theme.colors.subTextColor,
              }}>
              {text}
            </Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Button
              title={'CONTINUE'}
              backgroundColor={theme.colors.secondary}
              textColor={theme.colors.white}
              onPress={toggleModal}
              style={{
                bottom: 25,
                marginHorizontal: '20%',
                shadowOpacity: 0,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const margin = 10;
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    // borderRadius: 10,
    height: Dimensions.get('window').height / 2.9,
    width: '100%',
    // margin: 50,
    justifyContent: 'center',
    //alignItems: 'center',
    flex: 1,
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  titleStyle: {
    margin,
    fontSize: 18,
    marginTop: 6,
  },
  boxContainer: {
    width: 90,
    height: 100,
    backgroundColor: theme.colors.lightPrimary,
    margin,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 16,
    padding: 5,
  },
});

export { WelcomeModal };

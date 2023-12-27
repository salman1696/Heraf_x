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
  pdf_icon,
} from '../../assets';
import { HP, WP } from '../../utils';
import { Icon } from 'react-native-elements/dist/icons/Icon';

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

const UploadModal = ({
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
            paddingVertical: 5,
            backgroundColor: theme.colors.white,
            width: '85%',
            borderRadius: 8,
          }}>
          <View>
            <View
              style={{
                alignItems: 'flex-end',
              }}>
              <Icon
                style={{
                  alignSelf: 'center',
                }}
                onPress={onDone}
                iconStyle={{ padding: 4.5, marginEnd: 5 }}
                name={'close'}
                type={'antdesign'}
                size={25}
                color={theme.colors.textColor}
                tvParallaxProperties={undefined}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              padding: 10,
              marginTop: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderStyle: 'dashed',
              borderColor: theme.colors.gray,
              marginHorizontal: 60,
              backgroundColor: theme.colors.lightGray,
            }}>
            <Icon
              style={{
                alignSelf: 'center',
              }}
              onPress={onDone}
              iconStyle={{ padding: 4.5, marginEnd: 5, color: 'gray' }}
              name={'ios-folder-open'}
              type={'ionicon'}
              size={35}
              color={theme.colors.textColor}
              tvParallaxProperties={undefined}
            />
            <Text
              style={{
                fontFamily: Fonts.RobotoBold,
                fontSize: 14,
                color: theme.colors.textColor,
              }}>
              {headingText}
            </Text>
            {subHeadingText && (
              <Text
                style={{
                  top: 5,
                  fontFamily: Fonts.RobotoRegular,
                  fontSize: 11,
                  color: theme.colors.textColor,
                }}>
                {subHeadingText}
              </Text>
            )}
            <Button
              title={'Browse files'}
              backgroundColor={theme.colors.secondary}
              textColor={theme.colors.white}
              onPress={toggleModal}
              style={{
                bottom: 10,
                paddingHorizontal: 30,
                marginBottom: 5,
                shadowOpacity: 0,
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
              backgroundColor: theme.colors,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '67%',
                backgroundColor: '#8CD6B3',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={pdf_icon}
                  resizeMode={'cover'}
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    height: 40,
                    width: 40,
                  }}
                />
                <Text
                  style={{
                    fontFamily: Fonts.RobotoRegular,
                    fontSize: 13,
                    color: theme.colors.textColor,
                  }}>
                  {'Lecture-1.pdf'}
                </Text>
              </View>
              <View style={{ justifyContent: 'flex-start' }}>
                <Icon
                  style={{
                    alignSelf: 'center',
                  }}
                  onPress={onDone}
                  iconStyle={{ padding: 2, marginEnd: 5 }}
                  name={'close'}
                  type={'antdesign'}
                  size={15}
                  color={theme.colors.redColor}
                  tvParallaxProperties={undefined}
                />
              </View>
            </View>
            <Button
              title={'Upload'}
              backgroundColor={theme.colors.secondary}
              textColor={theme.colors.white}
              onPress={toggleModal}
              style={{
                bottom: 25,
                paddingHorizontal: 30,
                marginHorizontal: '10%',
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

export { UploadModal };

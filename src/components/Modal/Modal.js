import React, {Component} from 'react';
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
import {Button} from '../Buttons/Button';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CustomText} from '../Text/Text';
import {ListItem, Divider} from 'react-native-elements';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {cancelIcon, tomatoPic, lemonPic, onionPic} from '../../assets';

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

const CheckoutModal = ({
  toggleModal,
  modalVisible,
  text,
  headingText,
  subHeadingText,
  onChangeLanguage,
  onDone,
}) => {
  const {main, innerView, titleStyle} = styles;

  return (
    <Modal
      visible={modalVisible}
      animationIn="slideInUp"
      transparent
      onSwipeComplete={() => toggleModal(false)}
      onBackdropPress={() => toggleModal(false)}
      swipeDirection="up">
      <TouchableOpacity style={main}>
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            bottom: heightPercentageToDP(40),
            marginHorizontal: 30,
            paddingVertical: 30,
            backgroundColor: theme.colors.white,
            width: '75%',
            borderRadius: 8,
          }}>
          <View
            style={{
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingTop: 15,
            }}>
            <Text
              style={{
                fontFamily: Fonts.RobotoBold,
                fontSize: 24,
                color: theme.colors.secondary,
              }}>
              {headingText}
            </Text>
            {subHeadingText && (
              <Text
                style={{
                  top: 5,
                  fontFamily: Fonts.RobotoRegular,
                  fontSize: 18,
                  color: theme.colors.textColor,
                }}>
                {subHeadingText}
              </Text>
            )}
            <Text
              style={{
                fontFamily: Fonts.RobotoRegular,
                fontSize: 14,
                marginTop: 15,
                marginHorizontal: 13,
                lineHeight: 20,
                textAlign: 'center',
                color: theme.colors.subTextColor,
              }}>
              {text}
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Button
              title={'OK'}
              backgroundColor={theme.colors.secondary}
              textColor={theme.colors.white}
              onPress={toggleModal}
              style={{marginHorizontal: '40%', shadowOpacity: 0}}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

// const Box = ({title, selected, onPress}) => {
//   const {boxContainer} = styles;
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       activeOpacity={0.6}
//       style={[
//         boxContainer,
//         {backgroundColor: selected ? colors.primary : colors.lightPrimary},
//       ]}>
//       <Image
//         source={borderTick}
//         style={{
//           width: 30,
//           height: 30,
//           tintColor: selected ? colors.white : colors.primary,
//         }}
//         resizeMode={'contain'}
//       />
//       <CustomText
//         color={selected ? colors.white : colors.primary}
//         title={title}
//         type={'bold'}
//       />
//     </TouchableOpacity>
//   );
// };

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

export {CheckoutModal};

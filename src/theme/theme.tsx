import {Platform} from 'react-native';
import {Fonts} from '../utils/Fonts';
const theme = {
  colors: {
    primary: '#016235',
    tertiary: '#a92533',
    gray: '#737373',
    secondary: '#CF8701',
    themeColor: '#a99175',
    fadeColor: '#c8c8c8',
    textColor: '#353535',
    subTextColor: '#6d6d6d',
    lightTextColor: '#595959',
    outlineColor: '#868686',
    lightGray: '#EBEBEB',
    primaryDark: '#222455',
    primaryLight: '#FF6565',
    redColor: '#d20a0a',
    greenColor: '#00AF63',
    purpleColor: '#9E00B8',
    white: '#ffffff',
    blacki: '#222111',
    black: '#000000',
    borderColor: '#F3F3F3',
    borderColorGray: '#9EA0A5',
    borderColorwhite: '#707770',
    bgColor: '#fcfcfc',
  },
  Header: {
    backgroundColor: '#fff',
    statusBarProps: {
      barStyle: Platform.OS === 'android' ? 'light-content' : 'dark-content',
      translucent: true,
    },
  },
  Button: {
    raised: true,
    containerStyle: {marginVertical: 10},
    loadingProps: {size: 'large', color: '#a92533'},
    titleStyle: {color: 'white'},
    buttonStyle: {
      borderRadius: 20,
      backgroundColor: '#a92533',
    },
  },

  Text: {
    style: {
      fontSize: 16,
      padding: 5,
      fontFamily: Fonts.RobotoRegular,
    },
  },
  dimens: {
    itemContainerPadding: 20,
  },
  SocialIcon: {
    style: {
      borderRadius: 5,
      paddingLeft: 30,
      paddingRight: 30,
    },
  },

  Input: {
    containerStyle: {
      marginVertical: 5,
      borderBottomWidth: 0,
    },
    borderBottomWidth: 0,
    placeholderTextColor: '#ADADAD',
    activeOpacity: 1,

    errorStyle: {textAlign: 'center', fontSize: 12},
    leftIconContainerStyle: {
      marginRight: 5,
    },
  },

  Icon: {
    size: 25,
    color: '#ADADAD',
  },
  CheckBox: {
    containerStyle: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
  },

  Picker: {
    itemStyle: {borderRadius: 1},
  },
  dividerStyle: {
    width: '90%',
    height: 1.5,
    color: '#707070',
  },
};

export default theme;

import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../../theme';
import { HP, WP } from '../../../utils';
import { Fonts } from '../../../utils/Fonts';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const margin = 20;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  accountTxt: {
    fontSize: 19,
    fontFamily: Fonts.RobotoBold,
    marginVertical: 3,

    textAlign: 'left',
    color: theme.colors.textColor,
    marginTop: 50,
  },
  toProccedTxt: {
    fontSize: 16,
    fontFamily: Fonts.RobotoRegular,
    marginVertical: 5,
    paddingEnd: 30,
    textAlign: 'left',
    marginBottom: HP(4),
    color: theme.colors.subTextColor,
  },
  resendtxt: {
    fontSize: 14,
    left: 5,
    fontFamily: Fonts.RobotoBold,
    color: theme.colors.primary,
  },
  loginBgStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: SCREEN_WIDTH / 2.6,
    height: HP(10),
  },
  notaBot: {
    width: WP(7),
    height: HP(4),
    right: 15,
    margin: 2,
  },
  logoVision: {
    width: SCREEN_WIDTH / 5,
    height: 60,
    left: 10,
    position: 'absolute',
    bottom: 50,
  },
  langSwitch: {
    width: 22,
    height: 22,
    top: 4,
    padding: -2,
    right: 8,
  },
  inputContainer: {
    // flex: 4,
    height: SCREEN_HEIGHT - 70,
    marginLeft: margin,
    marginRight: margin,
    marginTop: margin,
  },
  //Input Styles
  inputContainerStyle: {
    // borderBottomWidth: 0.4,
    borderWidth: 1,
    end: 10,
    width: '105%',
    borderColor: '#00000032',
    borderRadius: 6,
  },
  input: {
    borderBottomColor: theme.colors.borderColorGray,
    marginEnd: 18,
    marginHorizontal: 5,
    fontFamily: Fonts.RobotoRegular,

    fontSize: 13,
  },
  lableStyle: {
    fontSize: 14,
    color: theme.colors.black,
  },
  codeFieldRoot: {
    marginTop: 10,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
  rootstyle: {
    marginTop: 10,
    width: WP(85),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
  cellRoot: {
    width: Platform.OS === 'android' ? WP(10.7) : WP(10.7),
    height: HP(6),
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: Fonts.RobotoRegular,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    color: theme.colors.textColor,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.outlineColor,
    shadowColor: 'red',
  },
  focusCell: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
  },

  cellText: {
    color: theme.colors.textColor,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;

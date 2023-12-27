import { StyleSheet, Dimensions } from 'react-native';
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
    width: 80,
    height: 60,

    left: 10,
  },
  langSwitch: {
    width: 22,
    height: 22,
    top: 4,
    padding: -2,
    right: 8,
  },
  inputContainer: {
    flex: 1,
    margin: margin / 10,
    marginLeft: margin,
    marginRight: margin,
    marginBottom: margin
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
});

export default styles;

/** @format */

import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../../theme';
import { HP } from '../../../../../utils';
import { Fonts } from '../../../../../utils/Fonts';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const margin = 20;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  descDetailTxt: {
    color: '#868686',
    marginHorizontal: 12,
    fontSize: 16,
    textAlign: 'left',
    letterSpacing: 0.1,
    fontFamily: Fonts.RobotoRegular,
  },
  descTxt: {
    color: '#353535',
    margin: 10,
    fontSize: 18,
    fontFamily: Fonts.RobotoBold,
  },
  imgTxt: {
    margin: 15,
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: 22,
    fontFamily: Fonts.RobotoBold,
    color: theme.colors.white,
  },
  bgImg: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 7,
  },
  loginBgStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
  },
  containerMain: {
    alignItems: 'center',
    marginBottom: HP(10),
  },
  inputContainer: {
    margin: margin,
    marginLeft: margin,
    marginRight: margin + 10,
  },
  //Input Styles
  inputContainerStyle: {
    borderBottomWidth: 0.4,
    borderWidth: 0,
    marginLeft: margin / 2.8,
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: 'white',
    borderBottomColor: theme.colors.borderColorGray,
    margin: 5,
    fontSize: 13,
  },
  lableStyle: {
    fontSize: 14,
    color: theme.colors.black,
  },
});

export default styles;

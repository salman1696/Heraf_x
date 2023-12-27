/** @format */

import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../../../theme';
import { HP } from '../../../../../utils';
import { Fonts } from '../../../../../utils/Fonts';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  descTxt: {
    color: '#353535',
    margin: 10,
    fontSize: 18,
    fontFamily: Fonts.RobotoBold,
  },
  containerMain: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  androidMargin: { marginTop: HP(3) },
  input: {

  },
  head: {
    height: 30,
    backgroundColor: theme.colors.secondary,
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
    height: SCREEN_HEIGHT / 5.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 7,
  },
  text: { color: 'white', textAlign: 'center', fontSize: 10 },
});

export default styles;

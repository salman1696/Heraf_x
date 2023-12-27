/** @format */

import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../../theme';
import { HP } from '../../../../../utils';
import DeviceInfo from 'react-native-device-info';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const margin = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
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
  containerMain: { flex: DeviceInfo.hasNotch() ? 0.75 : 0.68, paddingBottom: HP(19) },
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

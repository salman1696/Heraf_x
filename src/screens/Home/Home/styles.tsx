import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../theme';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const margin = 20;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colors.black,
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

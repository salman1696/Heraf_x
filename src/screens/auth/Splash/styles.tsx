import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../../theme';
import {HP, WP} from '../../../utils';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  bgImage: {
    width: WP('75'),
    height: HP('30'),
    // backgroundColor:'red',
    alignSelf: 'center',
    // opacity: 0.8,
  },
  logoVision: {
    width: SCREEN_WIDTH / 3.6,
    height: HP('10'),
    bottom: 25,
    right: 20,
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  logo: {
    bottom: 40,
    width: 250,
    height: 130,
  },
});

export default styles;

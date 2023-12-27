import { Platform } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../theme';
import { HP, WP } from '../../../../utils';
import { Fonts } from '../../../../utils/Fonts';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bgColor
  },

  containerMain: { flex: 1 },
  androidMargin: { marginTop: HP(3) },
  mapStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: HP(100),
    position: 'absolute',
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
  customHeader: { flexDirection: 'row', marginTop: 8 },
  menu: {
    flex: 0.2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  menuImage: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  deliveryOffText: {
    fontFamily: Fonts.comorfaRegular,
    color: theme.colors.white,

    fontSize: 14,
    textAlign: 'center',
  },
  dropOffText: {
    fontFamily: Fonts.comorfaRegular,
    color: theme.colors.white,
    fontSize: 14,
    textAlign: 'center',
  },
  deliveryOffImage: {
    height: HP(4),
    width: WP(4),
    marginEnd: 4,
    bottom: 1,
    tintColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  dropOffImage: {
    height: HP(4),
    width: WP(4),
    marginEnd: 4,
    bottom: 1,
    tintColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
});

export default styles;

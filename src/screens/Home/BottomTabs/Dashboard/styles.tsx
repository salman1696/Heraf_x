import { Platform } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../theme';
import { HP, WP } from '../../../../utils';
import { Fonts } from '../../../../utils/Fonts';
import DeviceInfo from 'react-native-device-info';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  containerMain: { flex: DeviceInfo.hasNotch() ? 0.91 : 0.89 },
  androidMargin: { marginTop: HP(3) },
  mapStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: HP(100),
    position: 'absolute',
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

    // color: 'white',
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

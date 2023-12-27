import { Platform } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
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


});

export default styles;

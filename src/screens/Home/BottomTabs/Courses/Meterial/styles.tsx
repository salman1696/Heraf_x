import {StyleSheet} from 'react-native';
import theme from '../../../../../theme';
import {Fonts} from '../../../../../utils/Fonts';

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
  container: {paddingHorizontal: 16, backgroundColor: '#fff', marginBottom: 25},
  head: {
    height: 30,
    backgroundColor: theme.colors.secondary,
  },
  text: {color: 'white', textAlign: 'center', fontSize: 10},
});

export default styles;

import React, { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
// import {splashBG, textLogo} from '../../assets';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { Fonts } from '../../../utils/Fonts';
import { logo, saudiVisionlogo } from '../../../assets';
import { WP } from '../../../utils';
const Splash = (props: any) => {
  const navigation = useNavigation();

  //redux

  // const {isLoggedIn} = useSelector(state => state.auth);

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('Home');
    }, 2000);
  }, []);

  const { main, bgImage } = styles;
  return (
    <View style={main}>
      <StatusBar hidden />
      <Image resizeMode={'contain'} style={bgImage} source={logo}></Image>
      <Image
        source={saudiVisionlogo}
        resizeMode={'contain'}
        style={styles.logoVision}
      />
    </View>
  );
};

export default Splash;

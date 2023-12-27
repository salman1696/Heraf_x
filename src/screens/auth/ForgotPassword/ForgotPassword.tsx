import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  BackHandler,
  Alert,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { CustomText, Button } from '../../../components';
import { Input, Icon } from 'react-native-elements';
import {
  logo,
  sudiaLang,
  saudiVisionlogo,
  notaBot,
  forgoticon,
} from '../../../assets';
import theme from '../../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { useDispatch, useSelector } from 'react-redux';
import { HP, WP } from '../../../utils';
import { Fonts } from '../../../utils/Fonts';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';

const Login = ({ navigation }: { navigation: any }) => {
  const [emailSelector, setEmailSelector] = useState(false);
  const [passwordSelector, setPasswordSelector] = useState(false);
  const [phone, setName] = useState('');

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        translucent={true}
      />
      {Platform.OS === 'android' ? <View style={{ height: HP(6) }} /> : null}
      <View
        style={{
          paddingHorizontal: 20,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            left: 5,
            marginTop: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name={'arrow-back'}
            type={'ionicon'}
            size={20}
            color={theme.colors.primary}
            tvParallaxProperties={undefined}
          />
          <Text
            style={{
              fontFamily: Fonts.RobotoRegular,
              color: theme.colors.primary,
              fontSize: 18,
              left: 2,
              bottom: 1,
            }}>
            {'Back'}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={sudiaLang}
            resizeMode={'center'}
            style={styles.langSwitch}
          />
          <Text
            style={{
              fontFamily: Fonts.RobotoRegular,
              color: theme.colors.textColor,
              fontSize: 20,
            }}>{`عربي`}</Text>
        </View>
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.inputContainer}>
        <View style={{ flex: 1, }}>
          <Image source={logo} resizeMode={'contain'} style={styles.logo} />

          <Image
            source={forgoticon}
            resizeMode={'cover'}
            style={{
              width: 112,
              alignSelf: 'center',
              height: 110,
              marginTop: 88,
            }}
          />

          <Text
            style={{
              fontSize: 22,
              fontFamily: Fonts.RobotoBold,
              marginVertical: 3,
              textAlign: 'center',
              color: theme.colors.textColor,
              marginTop: 10,
            }}>
            {'You Forgot Your Password?'}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.RobotoRegular,
              marginVertical: 5,
              textAlign: 'center',
              marginHorizontal: 40,
              marginBottom: HP(4),
              color: theme.colors.textColor,
            }}>
            {'No worries! Enter your email and we will send you a reset '}
          </Text>
          <Input
            onFocus={() => {
              setEmailSelector(true);
              setPasswordSelector(false);
            }}
            inputContainerStyle={{
              paddingLeft: 10,
              end: 10,
              width: '105%',
              borderColor: emailSelector ? theme.colors.primary : '#00000032',
              borderRadius: 4,
            }}
            leftIcon={
              <Icon
                name={'mail'}
                type={'entypo'}
                size={22}
                color={theme.colors.textColor}
                tvParallaxProperties={undefined}
              />
            }
            onChangeText={text => setName(text)}
            inputStyle={styles.input}
            placeholder={'Example@heraf.com'}
          />

          <Button
            title={'SEND REQUEST'}
            textColor={theme.colors.white}
            backgroundColor={theme.colors.primary}
            style={{ bottom: 50 }}
            onPress={() => navigation.navigate('ConfirmOTP')}
            loading={undefined}
          />

          <View style={{ position: 'absolute', bottom: 0, }}>
            <Image
              source={saudiVisionlogo}
              resizeMode={'contain'}
              style={styles.logoVision}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

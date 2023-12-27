import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import styles from './styles';
import { CustomText, Button } from '../../../components';
import { Input, Icon } from 'react-native-elements';
import { logo, sudiaLang, saudiVisionlogo, notaBot } from '../../../assets';
import theme from '../../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { HP, WP } from '../../../utils';
import { Fonts } from '../../../utils/Fonts';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import { CommonActions } from '@react-navigation/native';

const Login = ({ navigation }: { navigation: any }) => {
  const [emailSelector, setEmailSelector] = useState(false);
  const [passwordSelector, setPasswordSelector] = useState(false);
  const [phone, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        translucent={true}
      />
      {Platform.OS === 'android' ? <View style={{ height: HP(3) }} /> : null}
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        style={styles.inputContainer}>
        <View style={{ flex: 1, }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'flex-end',
            }}>
            <Image
              source={sudiaLang}
              resizeMode={'cover'}
              style={styles.langSwitch}
            />
            <Text
              style={{
                fontFamily: Fonts.RobotoRegular,
                color: theme.colors.textColor,
                fontSize: 20,
              }}>{`عربي`}</Text>
          </View>

          <Image source={logo} resizeMode={'contain'} style={styles.logo} />

          <Text
            style={{
              fontSize: 19,
              fontFamily: Fonts.RobotoBold,
              marginVertical: 3,
              color: theme.colors.textColor,
              marginTop: HP(6),
            }}>
            {'Log in to Heraf'}
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginVertical: 5,
              marginBottom: HP(4),
              color: '#353535',
            }}>
            {'Enter your Login details to access internal platform '}
          </Text>
          <Input
            onFocus={() => {
              setEmailSelector(true);
              setPasswordSelector(false);
            }}
            inputContainerStyle={{
              borderWidth: emailSelector ? 1.5 : 1,
              alignSelf: "center",

              paddingVertical: Platform.OS === 'ios' ? 3 : 0,
              width: '103%',
              borderColor: emailSelector ? theme.colors.primary : '#00000032',
              borderRadius: 4,
            }}
            onChangeText={text => setName(text)}
            inputStyle={styles.input}
            placeholder={'Email Address / Phone Number'}
          />
          <Input
            onFocus={() => {
              setPasswordSelector(true);
              setEmailSelector(false);
            }}
            inputContainerStyle={{
              borderWidth: passwordSelector ? 1.5 : 1,
              alignSelf: "center",
              width: '103%',
              borderColor: passwordSelector ? theme.colors.primary : '#00000032',
              borderRadius: 4,
            }}
            inputStyle={styles.input}
            onChangeText={text => setPassword(text)}
            secureTextEntry={showPassword}
            rightIconContainerStyle={{ right: 8 }}
            rightIcon={
              showPassword ? (
                <Icon
                  name={'eye-off-outline'}
                  type={'ionicon'}
                  size={24}
                  onPress={() => setShowPassword(false)}
                  color={theme.colors.borderColorGray}
                  tvParallaxProperties={undefined}
                />
              ) : (
                <Icon
                  name={'eyeo'}
                  type={'antdesign'}
                  size={24}
                  onPress={() => setShowPassword(true)}
                  color={theme.colors.borderColorGray}
                  tvParallaxProperties={undefined}
                />
              )
            }
            placeholder={'Password'}
          />
          <CustomText
            title={'Forgot Password?'}
            textAlign={'right'}
            color={theme.colors.primary}
            style={{ fontFamily: Fonts.RobotoRegular, bottom: 20 }}
            flex={undefined}

            padding={undefined}
            top={undefined}
            disabled={undefined}
            children={undefined}
            numberOfLines={undefined}
            size={11.2}
            onLongPress={undefined}
            onPress={() => navigation.navigate('ForgotPassword')}
            marginVertical={undefined}
            paddingHorizontal={undefined}
            marginTop={undefined} left={undefined} />
          <View
            style={{
              width: "35%",
              bottom: 28,
              left: -12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
            }}>
            <CheckBox />
            <Text
              style={{
                left: Platform.OS === 'ios' ? -15 : -15,
                fontSize: 12,
                textAlign: 'left',
                color: '#35353580',
              }}>
              Remember Password
            </Text>
          </View>
          <View
            style={{
              bottom: 30,
              borderWidth: 1.5,

              // height: HP(6.5),
              borderColor: theme.colors.textColor,
              borderRadius: 4,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                paddingVertical: 5,
                width: WP(45),
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <CheckBox size={20} style={{ alignSelf: 'center', bottom: 7 }} />
              <Text
                style={{
                  right: 10,
                  alignSelf: 'center',
                  fontSize: 12,
                  color: '#35353580',
                }}>
                I’m not a robot
              </Text>
            </View>
            <Image source={notaBot} resizeMode={'contain'} style={styles.notaBot} />
          </View>

          <Button
            title={'LOGIN'}
            textColor={theme.colors.white}
            backgroundColor={theme.colors.primary}
            style={{ bottom: 50 }}
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'App' }],
                }),
              );
            }}
            loading={undefined}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              bottom: 25,
            }}>
            <View
              style={{
                height: 1,
                width: '28%',
                top: 10,
                backgroundColor: '#35353540',
              }}></View>
            <View style={{ width: '28%' }}>
              <Text
                style={{
                  fontSize: 11,
                  alignSelf: 'center',
                  color: '#353535',
                }}>
                {'NOT A MEMBER?'}
              </Text>
            </View>
            <View
              style={{
                height: 1,
                width: '28%',
                top: 10,
                backgroundColor: '#35353540',
              }}></View>
          </View>
          <Button
            title={'REGISTER NOW'}
            textColor={theme.colors.white}
            backgroundColor={theme.colors.secondary}
            style={{ bottom: 45, marginHorizontal: 100 }}
            onPress={() => navigation.navigate('Signup')}
            loading={loading}
          />

          <View style={{ bottom: 0, position: 'absolute' }}>
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

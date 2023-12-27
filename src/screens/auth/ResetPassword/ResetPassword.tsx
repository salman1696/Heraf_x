import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
  Modal,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { Button } from '../../../components';
import { Input, Icon } from 'react-native-elements';
import {
  logo,
  sudiaLang,
  saudiVisionlogo,
  newpasswordicon,
} from '../../../assets';
import theme from '../../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HP, WP } from '../../../utils';
import { Fonts } from '../../../utils/Fonts';
import { CheckoutModal } from '../../../components/Modal/Modal';

const ResetPassword = ({ navigation }: { navigation: any }) => {
  const [emailSelector, setEmailSelector] = useState(false);
  const [passwordSelector, setPasswordSelector] = useState(false);
  const [phone, setName] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //modal
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
        <View style={{ flex: 1,  }}>
          <Image source={logo} resizeMode={'contain'} style={styles.logo} />

          <Image
            source={newpasswordicon}
            resizeMode={'contain'}
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
            {'New Password'}
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
            {'No worries! Enter your new password '}
          </Text>
          <Input
            inputContainerStyle={{
              borderWidth: passwordSelector ? 1.5 : 1,

              width: '103%',
              alignSelf: "center",
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
            placeholder={'Enter new password'}
          />
          <Input
            inputContainerStyle={{
              borderWidth: passwordSelector ? 1.5 : 1,


              width: '103%',
              alignSelf: "center",
              bottom: 15,
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
            placeholder={'Confirm new password'}
          />

          <Button
            title={'SEND REQUEST'}
            textColor={theme.colors.white}
            backgroundColor={theme.colors.primary}
            style={{ bottom: 50 }}
            onPress={toggleModal}
            loading={undefined}
          />

          <View style={{ bottom: 0, position:'absolute' }}>
            <Image
              source={saudiVisionlogo}
              resizeMode={'contain'}
              style={styles.logoVision}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      {isModalVisible && <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CheckoutModal
          toggleModal={toggleModal}
          modalVisible={isModalVisible}
          headingText={'Congratulations ! '}
          text={
            'Your account is activated and now you are a registered student. You can now log in to your personal dashboard.'
          }
          onChangeLanguage={undefined}
          onDone={toggleModal}
          subHeadingText={undefined}
        />
      </View>}
    </SafeAreaView>
  );
};

export default ResetPassword;

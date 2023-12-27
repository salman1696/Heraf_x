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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { CheckoutModal } from '../../../components/Modal/Modal';

const ConfirmOTP = ({ navigation }: { navigation: any }) => {
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const CELL_COUNT = 6;
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [emailSelector, setEmailSelector] = useState(false);
  const [passwordSelector, setPasswordSelector] = useState(false);
  const [phone, setName] = useState('');
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
            resizeMode={'contain'}
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
      <View
        // showsVerticalScrollIndicator={false}
        style={styles.inputContainer}>
        <Image source={logo} resizeMode={'contain'} style={styles.logo} />

        <Text style={styles.accountTxt}>{'Account Activation'}</Text>
        <Text style={styles.toProccedTxt}>
          {
            'To proceed, Please enter 6 - digit activation code we sent to he******ni@gmail.com '
          }
        </Text>
        <CodeField
          ref={ref}
          {...prop}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.rootstyle}
          keyboardType="number-pad"
          // textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        <Button
          title={'ACTIVATE'}
          textColor={theme.colors.white}
          backgroundColor={theme.colors.secondary}
          style={{ bottom: 25, marginHorizontal: 100 }}
          onPress={() => navigation.navigate('ResetPassword')}
          loading={undefined}
        />

        <TouchableOpacity
          onPress={toggleModal}
          style={{
            flexDirection: 'row',
            alignSelf: "center",
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={'refresh-ccw'}
            type={'feather'}
            size={18}
            color={theme.colors.primary}
            tvParallaxProperties={undefined}
          />
          <Text style={styles.resendtxt}>{'Resend code'}</Text>
        </TouchableOpacity>


      </View>
      <View style={{ marginHorizontal: 20, bottom: 20, }}>

        <Image
          source={saudiVisionlogo}
          resizeMode={'contain'}
          style={styles.logoVision}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CheckoutModal
          toggleModal={toggleModal}
          modalVisible={isModalVisible}
          headingText={'THANK YOU !'}
          text={
            'Reset link of your password has been sent to your provided email.'
          }
          onChangeLanguage={undefined}
          onDone={toggleModal}
          subHeadingText={undefined}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmOTP;

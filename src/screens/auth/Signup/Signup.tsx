import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles';
import { Button } from '../../../components';
import {
  logo,
  sudiaLang,
  studenticon,
  empicon,
  donoricon,
  orangeselection,
  studentsel,
  empSelected,
} from '../../../assets';
import theme from '../../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { HP, WP } from '../../../utils';
import { Fonts } from '../../../utils/Fonts';
import { TextInput } from 'react-native-gesture-handler';

import DatePicker from '../../../components/DatePicker';
import { Picker } from 'native-base';
import { CheckoutModal } from '../../../components/Modal/Modal';

const Signup = ({ navigation }: { navigation: any }) => {
  const [date, setDate] = useState('');
  const [studentSelector, setStudentSelector] = useState(false);
  const [empSelector, setEmpSelector] = useState(false);
  const [donorSelector, setDonerSelector] = useState(false);
  const [phone, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [genderValue, setGenderValue] = useState('Male');
  const [educationValue, setEducationValue] = useState('Bachelors');
  //modal
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [selectionData, setSelectionData] = useState([
    {
      id: 'student',
      isSelected: true,
      image: studenticon,
      selectedIcon: studentsel,
    },
    {
      id: 'employe',
      isSelected: false,
      image: empicon,
      selectedIcon: empSelected,
    },
    {
      id: 'doner',
      isSelected: false,
      image: donoricon,
      selectedIcon: orangeselection,
    },
  ]);

  useEffect(() => {
    console.log('data', selectionData);
  }, []);

  const onPressToggle = (id: string) => {
    // alert('tes');
    setSelectionData(
      selectionData.map(elm => {
        elm.isSelected = false;
        if (elm.id === id) {
          return { ...elm, isSelected: true };
        }
        return elm;
      }),
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        translucent={true}
      />
      {Platform.OS === 'android' ? <View style={{ height: HP(4.5) }} /> : null}
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.inputContainer}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image source={logo} resizeMode={'center'} style={styles.logo} />
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
          <Text
            style={{
              alignSelf: 'flex-start',
              fontSize: 19,
              fontFamily: Fonts.RobotoBold,
              marginVertical: 3,
              color: theme.colors.textColor,
              marginTop: HP(1),
            }}>
            {'Register yourself to Heraf'}
          </Text>
          <Text
            style={{
              alignSelf: 'flex-start',
              fontSize: 12,
              marginVertical: 3,
              marginBottom: HP(4),
              color: '#35353580',
            }}>
            {'Enter your Login details to access internal platform '}
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput
              underlineColorAndroid="transparent"
              style={{
                borderWidth: 1,
                width: '48%',
                borderColor: '#00000032',
                borderRadius: 3,
                paddingVertical: Platform.OS === 'ios' ? 11 : 6,
                borderBottomColor: theme.colors.borderColorGray,
                // marginEnd: 18,
                paddingStart: 10,
                fontFamily: Fonts.RobotoRegular,
                fontSize: 13,
              }}
              onChangeText={(text: any) => setName(text)}
              placeholder={'First Name'}
              placeholderTextColor={'gray'}

            />
            <TextInput
              underlineColorAndroid="transparent"
              style={{
                borderWidth: 1,
                paddingVertical: Platform.OS === 'ios' ? 11 : 6,
                width: '48%',
                borderColor: '#00000032',
                borderRadius: 3,
                borderBottomColor: theme.colors.borderColorGray,
                // marginEnd: 18,
                paddingStart: 10,
                fontFamily: Fonts.RobotoRegular,
                fontSize: 13,
              }}
              onChangeText={(text: any) => setName(text)}
              placeholder={'Last Name'}
              placeholderTextColor={'gray'}

            />
          </View>

          <TextInput
            underlineColorAndroid="transparent"
            style={{
              borderWidth: 1,
              paddingVertical: Platform.OS === 'ios' ? 11 : 6,
              width: '100%',
              marginTop: 15,
              borderColor: '#00000032',
              borderRadius: 3,
              borderBottomColor: theme.colors.borderColorGray,
              // marginEnd: 18,
              paddingStart: 10,
              fontFamily: Fonts.RobotoRegular,
              fontSize: 13,
            }}
            onChangeText={(text: any) => setName(text)}
            placeholder={'Email'}
            placeholderTextColor={'gray'}

          />

          <TextInput
            underlineColorAndroid="transparent"
            style={{
              borderWidth: 1,
              paddingVertical: Platform.OS === 'ios' ? 11 : 6,
              width: '100%',
              marginTop: 15,
              borderColor: '#00000032',
              borderRadius: 3,
              borderBottomColor: theme.colors.borderColorGray,
              // marginEnd: 18,
              paddingStart: 10,
              fontFamily: Fonts.RobotoRegular,
              fontSize: 13,
            }}
            onChangeText={(text: any) => setName(text)}
            placeholder={'Phone No.'}
            placeholderTextColor={'gray'}

          />
          <View
            style={{
              width: '100%',
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput
              underlineColorAndroid="transparent"
              style={{
                borderWidth: 1,
                paddingVertical: Platform.OS === 'ios' ? 11 : 6,
                width: '48%',
                borderColor: '#00000032',
                borderRadius: 3,
                borderBottomColor: theme.colors.borderColorGray,
                // marginEnd: 18,
                paddingStart: 10,
                fontFamily: Fonts.RobotoRegular,
                fontSize: 13,
              }}
              onChangeText={(text: any) => setName(text)}
              placeholder={'Password'}
              placeholderTextColor={'gray'}

            />
            <TextInput
              underlineColorAndroid="transparent"
              style={{
                borderWidth: 1,
                paddingVertical: Platform.OS === 'ios' ? 11 : 6,
                width: '48%',
                borderColor: '#00000032',
                borderRadius: 3,
                borderBottomColor: theme.colors.borderColorGray,
                // marginEnd: 18,
                paddingStart: 10,
                fontFamily: Fonts.RobotoRegular,
                fontSize: 13,
              }}
              onChangeText={(text: any) => setName(text)}
              placeholder={'Confirm Password'}
              placeholderTextColor={'gray'}
            />
          </View>
          <Text
            style={{
              marginTop: 15,
              fontSize: 19,
              alignSelf: 'flex-start',
              textAlign: 'left',
              fontFamily: Fonts.RobotoBold,
              color: theme.colors.textColor,
            }}>
            You want to register as a
          </Text>

          <View
            style={{
              width: '100%',
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            {selectionData.map(
              (item: {
                isSelected: any;
                id: string;
                image: ImageSourcePropType;
                selectedIcon: ImageSourcePropType;
              }) =>
                !item.isSelected ? (
                  <TouchableOpacity
                    onPress={() => onPressToggle(item.id)}
                    style={{
                      backgroundColor: '#353535',
                      width: WP(22),
                      borderRadius: 4,
                      marginRight: 15,
                      alignItems: 'center',
                      height: HP(10),
                    }}>
                    <Image
                      source={item.image}
                      resizeMode={'center'}
                      style={{
                        width: WP(22),
                        borderRadius: 4,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        height: HP(10),
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => onPressToggle(item.id)}
                    style={{
                      marginHorizontal: 15,
                      alignItems: 'center',
                      width: WP(22),
                      borderRadius: 4,
                      marginRight: 15,
                      height: HP(11),
                    }}>
                    <Image
                      source={item.selectedIcon}
                      resizeMode={'contain'}
                      style={{
                        width: WP(22),
                        borderRadius: 4,
                        alignItems: 'center',
                        height: HP(11.5),
                      }}
                    />
                  </TouchableOpacity>
                ),
            )}
          </View>

          {selectionData.map(elm => {
            if (
              elm.isSelected &&
              (elm.id === 'student' || elm.id === 'doner')
            ) {
              return (
                <View
                  style={{
                    width: '100%',
                    marginTop: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      width: '48%',
                      height: 40,
                      backgroundColor: '#FFF',
                      borderRadius: 4,
                      borderWidth: 1,
                      justifyContent: 'center',
                      borderColor: '#00000032',
                    }}>
                    <Picker
                      style={{
                        fontSize: 10,
                        height: 100,
                        width: 180,
                        color: theme.colors.subTextColor
                      }}
                      selectedValue={genderValue}
                      onValueChange={(itemValue: any) =>
                        setGenderValue(itemValue)
                      }>

                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                    </Picker>
                  </View>

                  <View
                    style={{
                      width: '48%',
                      height: 40,
                      backgroundColor: '#FFF',
                      borderRadius: 4,
                      borderWidth: 1,
                      justifyContent: 'center',
                      borderColor: '#00000032',
                    }}>
                    <DatePicker
                      editable={true}
                      onChange={(date: React.SetStateAction<string>) =>
                        setDate(date)
                      }
                    />
                  </View>
                </View>
              );
            } else if (elm.isSelected && elm.id === 'employe') {
              return (
                <View
                  style={{
                    width: '100%',
                    marginTop: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      borderWidth: 1,
                      paddingVertical: Platform.OS === 'ios' ? 11 : 6,
                      width: '48%',
                      borderColor: '#00000032',
                      borderRadius: 3,
                      borderBottomColor: theme.colors.borderColorGray,
                      // marginEnd: 18,
                      paddingStart: 10,
                      fontFamily: Fonts.RobotoRegular,
                      fontSize: 13,
                    }}
                    onChangeText={(text: any) => setName(text)}
                    placeholderTextColor={'gray'}
                    placeholder={'CR NO.'}
                  />
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      borderWidth: 1,
                      paddingVertical: Platform.OS === 'ios' ? 11 : 6,
                      width: '48%',
                      borderColor: '#00000032',
                      borderRadius: 3,
                      borderBottomColor: theme.colors.borderColorGray,
                      // marginEnd: 18,
                      paddingStart: 10,
                      fontFamily: Fonts.RobotoRegular,
                      fontSize: 13,
                    }}
                    onChangeText={(text: any) => setName(text)}
                    placeholder={'Company Name'}
                    placeholderTextColor={'gray'}

                  />
                </View>
              );
            }
          })}

          {selectionData.map(elm => {
            if (elm.isSelected && elm.id === 'student') {
              return (
                <View
                  style={{
                    width: '100%',
                    marginTop: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      borderWidth: 1,
                      paddingVertical: 2,
                      width: '48%',
                      borderColor: '#00000032',
                      borderRadius: 3,
                      borderBottomColor: theme.colors.borderColorGray,
                      // marginEnd: 18,
                      paddingStart: 10,
                      fontFamily: Fonts.RobotoRegular,
                      fontSize: 13,
                    }}
                    onChangeText={(text: any) => setName(text)}
                    placeholderTextColor={'gray'}
                    placeholder={'Govt. id'}
                  />
                  <View
                    style={{
                      width: '48%',
                      height: 40,
                      backgroundColor: '#FFF',
                      borderRadius: 4,
                      borderWidth: 1,
                      justifyContent: 'center',
                      borderColor: '#00000032',
                    }}>
                    <Picker
                      style={{
                        fontSize: 10, height: 100,
                        width: 180, color: theme.colors.subTextColor
                      }}
                      selectedValue={educationValue}
                      onValueChange={(itemValue: any) =>
                        setEducationValue(itemValue)
                      }>

                      <Picker.Item label="Bachelors" value="Bachelors" />
                      <Picker.Item label="Masters" value="Masters" />
                    </Picker>
                  </View>
                </View>
              );
            } else if (elm.isSelected && elm.id === 'employe') {
              return (
                <TextInput
                  underlineColorAndroid="transparent"
                  style={{
                    borderWidth: 1,
                    paddingVertical: Platform.OS === 'ios' ? 11 : 6,
                    width: '100%',
                    marginTop: 15,
                    borderColor: '#00000032',
                    borderRadius: 3,
                    borderBottomColor: theme.colors.borderColorGray,
                    // marginEnd: 18,
                    paddingStart: 10,
                    fontFamily: Fonts.RobotoRegular,
                    fontSize: 13,
                  }}
                  onChangeText={(text: any) => setName(text)}
                  placeholder={'Address'}
                  placeholderTextColor={'gray'}

                />
              );
            } else if (elm.isSelected && elm.id === 'doner') {
              return (
                <TextInput
                  underlineColorAndroid="transparent"
                  style={{
                    borderWidth: 1,
                    paddingVertical: Platform.OS === 'ios' ? 11 : 6,
                    width: '100%',
                    marginTop: 15,
                    borderColor: '#00000032',
                    borderRadius: 3,
                    borderBottomColor: theme.colors.borderColorGray,
                    // marginEnd: 18,
                    paddingStart: 10,
                    fontFamily: Fonts.RobotoRegular,
                    fontSize: 13,
                  }}
                  onChangeText={(text: any) => setName(text)}
                  placeholder={'Govt. id'}
                  placeholderTextColor={'gray'}

                />
              );
            }
          })}

          <Button
            title={'REGISTER'}
            textColor={theme.colors.white}
            backgroundColor={theme.colors.primary}
            style={{ marginHorizontal: 10, bottom: 20, width: '100%' }}
            onPress={toggleModal}
            loading={loading}
          />
          <View style={styles.dontHaveView}>
            <View style={styles.donthaveInnnerView}>
              <Text style={styles.donthavetext}>
                Already have an account ?{'   '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.donthaveTO}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
          subHeadingText={'For registering'}
          text={
            'You will receive your initial activation code on the email or phone number you registered with shortly.'
          }
          onChangeLanguage={undefined}
          onDone={toggleModal}
        />
      </View>
    </SafeAreaView>
  );
};

export default Signup;

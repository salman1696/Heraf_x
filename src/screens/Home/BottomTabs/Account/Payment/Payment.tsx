/** @format */

import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Platform,
  StatusBar,
  StatusBarIOS,
} from 'react-native';
import {
  avatar,
  bank_negative,
  bank_positive,
  card_icon,
  check_circle,
  course_horizontal_img,
  ms_negative,
  ms_positive,
  setting_img,
  sr_negative,
  sr_positive,
} from '../../../../../assets';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import { AppHeaderBack, Button } from '../../../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { HP, WP } from '../../../../../utils';
import { Icon, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { HEADER_HEIGHT } from '../../../../../utils/Constants';

const Payment = ({ navigation }: { navigation: any }) => {
  const [month, setMonth] = useState('');
  const [isUpload, setUpload] = useState(false);
  const [data, setData] = useState([
    {
      id: '1',
      filled: true,
      iconActive: sr_positive,
      iconDull: sr_negative,
      label: '    Cash    ',
      selected: true,
    },
    {
      id: '2',
      filled: false,
      iconActive: ms_positive,
      iconDull: ms_negative,
      label: 'Credit/Debit',
      selected: false,
    },
    {
      id: '3',
      filled: false,
      iconActive: bank_positive,
      iconDull: bank_negative,
      label: 'Bank Deposit',
      selected: false,
    },
  ]);

  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const onPressToggle = (id: string) => {
    // alert('tes');
    setData(
      data.map((elm) => {
        elm.selected = false;
        if (elm.id === id) {
          return { ...elm, selected: true };
        }
        return elm;
      }),
    );
  };

  const CText = ({ value = '', bold = true, size = 14, paddingVertical = 5 }) => {
    return (
      <Text
        style={{
          textAlign: 'left',
          paddingVertical: paddingVertical,
          fontSize: size,
          fontWeight: bold ? '500' : '100',
          marginHorizontal: 10,
          fontFamily: bold ? Fonts.RobotoBold : Fonts.RobotoRegular,
          color: theme.colors.textColor,
        }}>
        {value}
      </Text>
    );
  };



  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ? <View
        style={{
          backgroundColor: theme.colors.primary,
          height: HEADER_HEIGHT,
        }}>
        <StatusBar
          translucent
          backgroundColor='#000'
          barStyle='light-content'
        />
      </View> :
        <StatusBar
          translucent
          backgroundColor={theme.colors.primary}
          barStyle='light-content'
        />}

      {Platform.OS === 'android' && <View style={styles.androidMargin}></View>}
      <View style={styles.containerMain}>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            borderBottomRightRadius: 35,
            borderBottomLeftRadius: 35,
          }}>
          <View
            style={{
              padding: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              style={{ marginHorizontal: 6, top: 1 }}
              name='chevron-back'
              type='ionicon'
              color='white'
              size={18}
              onPress={() => navigation.goBack()} tvParallaxProperties={undefined} />

            <Text
              style={{
                margin: 5,
                fontFamily: Fonts.RobotoBold,
                fontSize: 19,
                color: 'white',
              }}>
              {'Payment'}
            </Text>
          </View>
          <View
            style={{
              margin: 15,
              marginTop: HP(5),
              marginBottom: HP(3),
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                marginHorizontal: 5,
                textAlign: 'center',
                fontFamily: Fonts.RobotoRegular,
                fontSize: 13,
                color: 'white',
              }}>
              {'Total Course Fee'}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                // margin: 5,
                fontFamily: Fonts.RobotoBold,
                fontSize: 35,
                fontWeight: '900',
                color: 'white',
              }}>
              {'SR 245.00'}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, top: 5 }}>
          <Text
            style={{
              margin: 5,
              paddingHorizontal: 20,
              fontFamily: Fonts.RobotoBold,
              fontSize: 14,
              color: theme.colors.textColor,
            }}>
            {'Payment Method'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              alignSelf: 'center',
            }}>
            {data.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => onPressToggle(item.id)}
                  style={{
                    borderRadius: 10,
                    margin: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30%',
                    backgroundColor: 'white',
                    borderColor: item.selected
                      ? theme.colors.primary
                      : theme.colors.lightGray,
                    borderWidth: item.selected ? 1 : 0.5,
                  }}>
                  <Image
                    source={item.selected ? item.iconActive : item.iconDull}
                    resizeMode={'contain'}
                    style={{
                      alignSelf: 'center',
                      width: WP(7),
                      height: HP(4),
                    }}
                  />
                  <Text
                    style={{
                      margin: 5,
                      // bottom: item.label === 'Cash' ? 0 : 0,
                      fontFamily: Fonts.RobotoBold,
                      fontSize: 14,
                      color: item.selected
                        ? theme.colors.primary
                        : theme.colors.textColor,
                    }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <ScrollView style={{ flex: 1, top: 5 }}>
            <View style={{ paddingBottom: 80, }}>
              {data.map((item) => {
                if (item.label === '    Cash    ' && item.selected) {
                  return (
                    <View style={{ marginVertical: 30 }}>
                      <Text
                        style={{
                          margin: 5,
                          paddingHorizontal: 20,
                          fontFamily: Fonts.RobotoBold,
                          fontSize: 14,
                          color: theme.colors.redColor,
                        }}>
                        {
                          'Note: If you want to pay through cash the payment will be done in the institute. '
                        }
                      </Text>
                      <Button
                        title={'OK'}
                        textColor={theme.colors.white}
                        backgroundColor={theme.colors.primary}
                        style={{ marginHorizontal: 20 }} loading={undefined}                  // onPress={() => navigation.navigate('Signup')}
                      // loading={loading}
                      />
                    </View>
                  );
                } else if (item.label === 'Credit/Debit' && item.selected) {
                  return (
                    <View style={{ marginVertical: 10 }}>
                      <View style={{ marginHorizontal: 10 }}>
                        <CText value={'Card Number'} />
                        <Input
                          leftIcon={
                            <Image
                              source={card_icon}
                              resizeMode={'contain'}
                              style={{
                                alignSelf: 'center',
                                margin: 10,
                                paddingHorizontal: 15,
                                // backgroundColor: 'green',
                                width: WP(4),
                                height: HP(5),
                              }}
                            />
                          }
                          inputContainerStyle={{
                            borderWidth: 1,

                            justifyContent: 'flex-start',
                            maxHeight: 150,
                            borderColor: '#00000032',
                            borderRadius: 4,
                          }}
                          // onChangeText={(text) => setName(text)}
                          inputStyle={{
                            borderBottomColor: theme.colors.borderColorGray,

                            marginHorizontal: 5,
                            fontFamily: Fonts.RobotoRegular,
                            fontSize: 13,
                          }}
                          placeholder={'**** **** *** *****'}
                        />
                        <View
                          style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center',
                          }}>
                          <View style={{ flex: 0.5 }}>
                            <CText value={'Valid until'} />
                            <Input
                              inputContainerStyle={{
                                borderWidth: 1,
                                justifyContent: 'flex-start',
                                maxHeight: 150,
                                borderColor: '#00000032',
                                borderRadius: 4,
                              }}
                              // onChangeText={(text) => setName(text)}
                              inputStyle={{
                                borderBottomColor: theme.colors.borderColorGray,

                                marginHorizontal: 5,
                                fontFamily: Fonts.RobotoRegular,
                                fontSize: 13,
                              }}
                              placeholder={'Month / Year'}
                            />
                          </View>
                          <View style={{ flex: 0.5 }}>
                            <CText value={'CVV'} />
                            <Input
                              inputContainerStyle={{
                                borderWidth: 1,

                                justifyContent: 'flex-start',
                                maxHeight: 150,
                                borderColor: '#00000032',
                                borderRadius: 4,
                              }}
                              // onChangeText={(text) => setName(text)}
                              inputStyle={{
                                borderBottomColor: theme.colors.borderColorGray,

                                marginHorizontal: 5,
                                fontFamily: Fonts.RobotoRegular,
                                fontSize: 13,
                              }}
                              placeholder={'***'}
                            />
                          </View>
                        </View>
                        <CText value={'Card Holder'} />
                        <Input
                          inputContainerStyle={{
                            borderWidth: 1,

                            justifyContent: 'flex-start',
                            maxHeight: 150,
                            borderColor: '#00000032',
                            borderRadius: 4,
                          }}
                          // onChangeText={(text) => setName(text)}
                          inputStyle={{
                            borderBottomColor: theme.colors.borderColorGray,

                            marginHorizontal: 5,
                            fontFamily: Fonts.RobotoRegular,
                            fontSize: 13,
                          }}
                          placeholder={'Your name and sur name'}
                        />
                      </View>
                      <Text
                        style={{
                          paddingHorizontal: 20,
                          fontFamily: Fonts.RobotoBold,
                          fontSize: 14,
                          color: theme.colors.textColor,
                        }}>
                        {'Save card for future payments'}
                      </Text>

                      <Button
                        title={'PAY NOW'}
                        textColor={theme.colors.white}
                        backgroundColor={theme.colors.primary}
                        style={{ bottom: 20, marginHorizontal: 20 }} loading={undefined}                  // onPress={() => navigation.navigate('Signup')}
                      // loading={loading}
                      />
                    </View>
                  );
                } else if (item.label === 'Bank Deposit' && item.selected) {
                  return (
                    <ScrollView
                      style={{ marginVertical: 10, flex: 1, paddingBottom: 25 }}>
                      <View style={{ marginHorizontal: 10 }}>
                        <CText value={'Bank Details'} bold={true} size={14} />

                        <View
                          style={{
                            width: '95%',
                            borderWidth: 1,
                            paddingHorizontal: 8,
                            alignItems: 'center',
                            alignSelf: 'center',
                            borderRadius: 3,
                            paddingVertical: 6,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignSelf: 'flex-start',
                            }}>
                            <CText value={'Bank Name:'} bold={true} size={13} />
                            <CText value={'The Saudi National Bank'} size={12} />
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              alignSelf: 'flex-start',
                            }}>
                            <CText value={'Account Title:'} bold={true} size={13} />
                            <CText value={'Heraf (Example)'} size={12} />
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignSelf: 'flex-start',
                            }}>
                            <CText value={'IBAN:'} bold={true} size={13} />
                            <CText
                              value={'SA03 8000 0000 6080 1016 7519'}
                              size={12}
                            />
                          </View>
                        </View>
                        <View style={{ marginTop: 5 }}>
                          <CText value={'Transaction Id *'} bold={true} size={14} />
                          <Input
                            inputContainerStyle={{
                              borderWidth: 1,
                              borderColor: '#00000032',
                              borderRadius: 4,
                            }}
                            // onChangeText={(text) => setName(text)}
                            inputStyle={{
                              borderBottomColor: theme.colors.borderColorGray,
                              backgroundColor: 'white',
                              paddingHorizontal: 5,
                              margin: 1,
                              fontFamily: Fonts.RobotoRegular,
                              fontSize: 13,
                            }}
                            placeholder={'ABCDEFGH-123'}
                          />
                        </View>
                        <View style={{ bottom: 20 }}>
                          <CText value={'Attachment: '} bold={true} size={14} />
                          <CText
                            value={`Upload a photo of the Receipt. Make sure all the information is visible. `}
                            paddingVertical={0}
                            bold={false}
                            size={13}
                          />
                          {isUpload && (
                            <View
                              style={{
                                borderRadius: 4,
                                padding: 40,
                                margin: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#F1F1F1',
                              }}>
                              <Text
                                style={{
                                  paddingHorizontal: 10,
                                  fontFamily: Fonts.RobotoRegular,
                                  fontSize: 14,
                                  color: theme.colors.subTextColor,
                                }}>
                                {'Recipt Preview'}
                              </Text>
                            </View>
                          )}
                          <TouchableOpacity
                            onPress={() => setUpload(true)}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              padding: 6,
                              borderRadius: 3,
                              marginTop: 8,
                              borderWidth: 1.5,
                              borderColor: theme.colors.primary,
                              alignSelf: 'flex-start',
                              marginHorizontal: 10,
                            }}>
                            <Icon
                              name={'upload'}
                              type={'antdesign'}
                              size={18}
                              color={theme.colors.primary} tvParallaxProperties={undefined} />
                            <Text
                              style={{
                                paddingHorizontal: 10,
                                fontFamily: Fonts.RobotoBold,
                                fontSize: 14,
                                color: theme.colors.primary,
                              }}>
                              {'Upload'}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <Button
                        title={'PAY NOW'}
                        enable={isUpload}
                        textColor={theme.colors.white}
                        backgroundColor={isUpload ? theme.colors.primary : '#7FAF99'}
                        style={{ bottom: 40, marginHorizontal: 20 }} loading={undefined}                  // onPress={() => navigation.navigate('Signup')}
                      // loading={loading}
                      />
                    </ScrollView>
                  );
                }
              })}
            </View>
          </ScrollView>
        </View>
      </View >
    </View >
  );
};

export default Payment;

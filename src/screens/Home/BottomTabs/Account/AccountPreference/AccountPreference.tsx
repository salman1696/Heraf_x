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
  SectionList,
  Switch,
  StatusBar,

} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import {
  avatar,
  check_circle,
  course_horizontal_img,
  setting_img,
} from '../../../../../assets';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import { AppHeaderBack, Button } from '../../../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { HP, WP } from '../../../../../utils';
import { Icon, Input } from 'react-native-elements';
import { HEADER_HEIGHT } from '../../../../../utils/Constants';

const AccountPreference = ({ navigation }: { navigation: any }) => {
  const [month, setMonth] = useState('');
  const [data, setData] = useState([
    {
      title: 'Notifications',
      data: [
        { id: '1', selected: true, label: 'SMS Text Notifications' },
        {
          id: '2',
          selected: false,
          label: 'Mobile Push Notifications',
        },
        {
          id: '3',
          selected: true,
          label: 'Email Notifications',
        },
      ],
    },
    {
      title: 'Newsletters',
      data: [
        { id: '4', selected: true, label: 'SMS Text Notifications' },
        {
          id: '5',
          selected: true,
          label: 'Mobile Push Notifications',
        },
        {
          id: '6',
          selected: false,
          label: 'Email Notifications',
        },
      ],
    },
    {
      title: 'Notify about Rescheduled Lectures',
      data: [
        { id: '7', selected: false, label: 'SMS Text Notifications' },
        {
          id: '8',
          selected: true,
          label: 'Mobile Push Notifications',
        },
        {
          id: '9',
          selected: false,
          label: 'Email Notifications',
        },
      ],
    },
    {
      title: 'New Offers & Scholorships Programs',
      data: [
        { id: '10', selected: false, label: 'SMS Text Notifications' },
        {
          id: '11',
          selected: false,
          label: 'Mobile Push Notifications',
        },
        {
          id: '12',
          selected: false,
          label: 'Email Notifications',
        },
      ],
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

  const toggleSwitch = (id: string) => {
    // setData(
    //   data?.map((mainItem) => {
    //     return mainItem.data.map((item) => {
    //       if (item.id === id) {
    //         return { ...item, selected: !item.selected };
    //       }
    //       return item;
    //     });
    //   }),
    // );
  };

  const CText = ({ value }: { value: any }) => {
    return (
      <Text
        style={{
          paddingVertical: 2,
          fontSize: 13,
          fontWeight: '100',
          fontFamily: Fonts.RobotoRegular,
          color: theme.colors.lightTextColor,
        }}>
        {value}
      </Text>
    );
  };

  const Item = ({ title, item }: { title: any, item: any }) => (
    <View
      style={{
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          textAlign: 'left',
          fontSize: 14,
          left: 15,
          fontWeight: '600',
          fontFamily: Fonts.RobotoBold,
          color: theme.colors.lightTextColor,
        }}>
        {title}
      </Text>
      <Switch
        style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
        trackColor={{ false: '#767577', true: theme.colors.primary }}
        thumbColor={true ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor='#BBBEBD'
        // onValueChange={() => {
        //   toggleSwitch(item.id);
        // }}
        value={item.selected}
      />
    </View>
  );

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
        <AppHeaderBack
          title={'Account Preference'}
          // userText={'Hassan Bin Ahmad'}
          back={'yes'}
          navigation={navigation}
        />
        <ScrollView style={{ flex: 1 }}
        >
          <View style={{
            flex: 1,
            elevation: 4,
            borderRadius: 4,
            shadowColor: 'gray',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.3,
            borderColor: '#353535',
            margin: 15,
            backgroundColor: theme.colors.white,
          }} >
            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
              <View
                style={{ width: 4, backgroundColor: theme.colors.secondary }}
              />
              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingEnd: 40,
                  color: theme.colors.subTextColor,
                  fontFamily: Fonts.RobotoRegular,
                  fontSize: 14,
                }}>
                In addition to important notifications, we may send you the
                following additional notifications.
              </Text>
            </View>

            <SectionList
              sections={data}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <Item title={item.label} item={item} />}
              renderSectionHeader={({ section: { title } }) => (
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    marginVertical: 20,
                  }}>
                  <View
                    style={{
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      backgroundColor: theme.colors.primary,
                      width: 15,
                      marginEnd: 10,
                      height: 10,
                    }}
                  />
                  <Text
                    style={{
                      textAlign: 'left',
                      fontSize: 16,
                      fontWeight: '600',
                      fontFamily: Fonts.RobotoBold,
                      color: theme.colors.primary,
                    }}>
                    {title}
                  </Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AccountPreference;

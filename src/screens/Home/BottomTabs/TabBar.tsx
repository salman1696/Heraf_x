/** @format */

import { View } from 'native-base';
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {hasNotch} from 'react-native-device-info';
import { Icon } from 'react-native-elements';
import {
  account,
  accountfill,
  calender,
  calenderfill,
  courseicon,
  explore,
  explorefill,
  home,
  homefill,
  mycourse,
  mycoursefill,
} from '../../../assets';
import theme from '../../../theme';
import { HP, WP } from '../../../utils';
import { Fonts } from '../../../utils/Fonts';

export const TabBar = (props: any) => {
  const { state, descriptors, navigation, nav } = props;

  let tabIconColor = 'grey';
  let selectedTabIconColor = 'orange';
  const IconStyle = {
    Dashboard: {
      icon: home,
      iconfilled: homefill,
      family: 'material-community',
      key: 'Home',
    },
    Explore: {
      icon: explore,
      iconfilled: explorefill,
      family: 'font-awesome',
      key: 'explore',
    },
    'My Courses': {
      icon: mycourse,
      iconfilled: mycoursefill,
      family: 'font-awesome',
      key: 'Courses',
    },
    Calender: {
      icon: calender,
      iconfilled: calenderfill,
      family: 'feather',
      key: 'Calender',
    },
    Account: {
      icon: account,
      iconfilled: accountfill,
      family: 'feather',
      key: 'Account',
    },
  };

  const _renderItem = (name: any, onPress: any, focused: any) => {
    let _icon = IconStyle[name];
    // alert(nav);
    return (
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={focused ? styles.foucedStyles : styles.inactiveStyle}
          onPress={onPress}>
          {name !== 'My Courses' ? (
            <Image
              source={focused ? _icon.iconfilled : _icon.icon}
              resizeMode={'contain'}
              style={{
                height: 20,
                width: 20,
                bottom: 8,
                color: focused ? theme.colors.secondary : '#353535',
              }}
            />
          ) : (
            <LinearGradient
              start={{ x: 0.5, y: 0.1 }}
              colors={['#ffffffff', '#ffffff']}
              locations={[0.2, 1, 0.5]}
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.44,
                shadowRadius: 10.32,
                elevation: 16,
                padding: 12,
                bottom: Platform.OS === 'ios' ? 26 : 16,
                borderWidth: Platform.OS === 'ios' ? 1 : 0,
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderColor: "#F3F3F3",
                borderRadius: 37,
              }}>
              <Image
                source={_icon.icon}
                resizeMode={'contain'}
                style={{
                  height: name === 'My Courses' ? 36 : 20,
                  width: name === 'My Courses' ? 36 : 20,
                  color: focused ? theme.colors.secondary : '#353535',

                }}
              />
            </LinearGradient>
          )}
          <Text
            style={{
              fontSize: 11,
              marginTop: WP('1'),
              bottom: name === 'My Courses' ? 28 : 8,
              textAlign: 'center',
              backgroundColor: name === 'My Courses' ? '#ffffff99' : null,
              fontFamily: Fonts.RobotoBold,
              color: focused ? theme.colors.secondary : '#353535',
            }}>
            {name}
          </Text>
        </TouchableOpacity>
        {focused && (
          <View
            style={{
              position: 'absolute',
              bottom: name === 'My Courses' ? 14 : -7,
              width: WP('17'),
              height: 5,
              backgroundColor: theme.colors.secondary,
            }}></View>
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        console.log(options, 'route');
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;
        // const icon = options.tabBarIcon(
        //   <MaterialCommunityIcons name="home" color={colors.p1} size={12} />,
        // );
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return _renderItem(label, onPress, isFocused);
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? WP(19) : WP(15),
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    // backgroundColor: theme.colors.themeColor,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#eee',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-start',
    elevation: 10,
    justifyContent: 'space-between',
    paddingHorizontal: WP(1),
  },
  foucedStyles: {
    // padding: 3,
    alignItems: 'center',
    // marginHorizontal: 5,
    width: Platform.OS === 'ios' ? 69 : 69,
  },
  inactiveStyle: {
    alignItems: 'center',
    // marginHorizontal: 5,
    // padding: 3,
    width: Platform.OS === 'ios' ? 69 : 69,
  },
});

/** @format */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
  Alert,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
  tab_menu,
} from '../../../../assets';
import theme from '../../../../theme';
import { HP, WP } from '../../../../utils';
import { Fonts } from '../../../../utils/Fonts';

export const TabBar = (props: any) => {
  const { state, descriptors, navigation, nav } = props;
  const [menuClick, setMenuClick] = useState(false);

  let tabIconColor = 'grey';
  let selectedTabIconColor = 'orange';

  const _renderItem = (name: any, onPress: ((event: GestureResponderEvent) => void) | undefined, focused: boolean) => {
    // alert(nav);
    return (
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 8,
          height: 40,
        }}>
        <TouchableOpacity
          style={focused ? styles.foucedStyles : styles.inactiveStyle}
          onPress={onPress}>
          <Text
            style={{
              top: 10,
              fontSize: 13,
              paddingHorizontal: 10,
              textAlign: 'center',
              fontFamily: Fonts.RobotoBold,
              color: focused ? '#353535' : '#6d6d6d',
            }}>
            {name}
          </Text>
        </TouchableOpacity>
        {focused && (
          <View
            style={{
              position: 'absolute',
              bottom: -1,
              width: WP('17'),
              height: 4,
              backgroundColor: '#353535',
            }}></View>
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {state.routes.map((route: { name: string; key: string | number; }, index: any) => {
          console.log(route.name, 'route');
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
              route.name !== 'menu' && navigation.navigate(route.name);
            }
          };

          return (
            route.name !== 'menu' && _renderItem(label, onPress, isFocused)
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'android' ? WP(10) : WP(10),
    width: WP('100'),
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    // backgroundColor: theme.colors.purpleColor,
    flexDirection: 'row',
    borderColor: '#eee',
    elevation: 5,
    justifyContent: 'space-between',
    paddingHorizontal: WP(1),
  },
  foucedStyles: {
    alignItems: 'center',
    marginHorizontal: 3,
    // marginVertical: 5,
  },
  inactiveStyle: {
    paddingVertical: 5,
    alignItems: 'center',
    marginHorizontal: 3,
  },
});

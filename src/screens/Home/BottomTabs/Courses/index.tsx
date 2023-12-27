/** @format */

import React, { useEffect, useState } from "react";
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
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
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
} from "../../../../assets";
import theme from "../../../../theme";
import { HP, WP } from "../../../../utils";
import { Fonts } from "../../../../utils/Fonts";

import { useScrollToTop } from "@react-navigation/native";

export const TabBar = (props: any) => {
  const { state, descriptors, navigation, nav } = props;
  const [menuClick, setMenuClick] = useState(false);
  const scrollRef = React.useRef(null);
  const [scroll, setScroll] = useState(null);

  // const scrollRef = React.createRef();

  useEffect(() => {
    scrollRef.current.scrollTo({ x: state.index * 80, y: 0, animated: true });
  });

  let tabIconColor = "grey";
  let selectedTabIconColor = "orange";

  const _renderItem = (name: any, onPress: any, focused: any) => {
    // alert(nav);
    return (
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 8,
          // paddingVertical: 8,
        }}
      >
        <TouchableOpacity
          style={focused ? styles.foucedStyles : styles.inactiveStyle}
          onPress={onPress}
        >
          <Text
            style={{
              fontSize: 14,
              paddingHorizontal: 10,
              textAlign: "center",
              fontFamily: Fonts.RobotoBold,
              color: focused ? theme.colors.secondary : "#353535",
            }}
          >
            {name}
          </Text>
        </TouchableOpacity>
        {focused && (
          <View
            style={{
              position: "absolute",
              bottom: -1,
              width: WP("17"),
              height: 5,
              backgroundColor: theme.colors.secondary,
            }}
          ></View>
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert("Bottom sheet")}>
        <Image
          source={tab_menu}
          resizeMode={"contain"}
          style={{
            marginHorizontal: WP(2.5),
            height: HP(6),
            width: WP(5),
          }}
        />
      </TouchableOpacity>

      <ScrollView
        ref={(list) => (scrollRef.current = list)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {state.routes.map(
          (route: { name: string; key: string | number }, index: any) => {
            console.log(route.name, "route");
            const { options } = descriptors[route.key];

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
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                route.name !== "menu" && navigation.navigate(route.name);
              }
            };

            return (
              route.name !== "menu" && _renderItem(label, onPress, isFocused)
            );
          }
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "android" ? WP(10) : WP(10),
    width: WP("100"),
    alignItems: "center",
    backgroundColor: "white",
    // backgroundColor: theme.colors.purpleColor,
    flexDirection: "row",
    borderColor: "#eee",
    elevation: 5,
    justifyContent: "space-between",
    paddingHorizontal: WP(1),
  },
  foucedStyles: {
    alignItems: "center",
    marginHorizontal: 3,
    // marginVertical: 5,
  },
  inactiveStyle: {
    paddingVertical: 5,
    alignItems: "center",
    marginHorizontal: 3,
  },
});

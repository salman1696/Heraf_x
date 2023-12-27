import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import { colors, Divider, Icon, Image } from 'react-native-elements';
import theme from '../../theme';
import { Fonts } from '../../utils/Fonts';
import { HP, WP } from '../../utils';

const LearningExpandableCard = ({ item, onPress, color }: { item: any, onPress: any, color: any }) => (
  <View
    //  onPress={onPress}
    style={{
      borderColor: '#d0d0d0',
      borderRadius: 10,
      padding: WP(2),
      borderWidth: 1,
      marginStart: 5,
      margin: 3,
      // backgroundColor: item.selected ? '#ABE9FE' : colors.s1,
      backgroundColor: 'white',
    }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          borderRadius: 65,
          width: 20,
          alignItems: 'center',
          height: 20,
          backgroundColor: color,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: Fonts.RobotoRegular,
          }}>
          {item.id}
        </Text>
      </View>
      <Text
        style={{
          flex: 7,
          left: 10,
          color: '#868686',
          fontFamily: Fonts.RobotoRegular,
        }}>
        {item.title}
      </Text>
      {item.selected ? (
        <Icon
          onPress={onPress}
          style={{ right: 15 }}
          name={'angle-up'}
          type={'font-awesome'}
          size={22}
          color={'#868686'} tvParallaxProperties={undefined} />
      ) : (
        <Icon
          onPress={onPress}
          style={{ right: 15 }}
          name={'angle-down'}
          type={'font-awesome'}
          size={22}
          color={'#868686'} tvParallaxProperties={undefined} />
      )}
    </View>
    {item.selected ? (
      <Text
        style={{
          color: item.selected ? '#484848' : theme.colors.white,
          fontSize: 13,
          paddingVertical: 10,
          fontFamily: Fonts.comorfaRegular,
          lineHeight: 18,
          letterSpacing: 1.1,
        }}>
        {item.desc}
      </Text>
    ) : null}
  </View>
);

const Styles = StyleSheet.create({
  mobileListItemSty: {
    backgroundColor: theme.colors.primary,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: theme.colors.lightGray,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,

    borderRadius: 5,
  },
  textTitle: {
    marginStart: WP(4),
    textAlign: 'left',
    fontSize: WP(8),
    color: theme.colors.white,
    fontFamily: Fonts.comorfaRegular,
    justifyContent: 'center',
  },
  textTitlePrice: {
    marginStart: WP(6),
    fontSize: WP(3),
    textAlign: 'left',
    color: theme.colors.white,
    fontFamily: Fonts.comorfaRegular,
  },
});
export { LearningExpandableCard };

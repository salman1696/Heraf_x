import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

import {Fonts} from '../../utils/Fonts';
import theme from '../../theme';

const Input = ({style, title, children, lableIcon, titleColor}) => {
  const {containerStyle, textStyle} = inputStyles;

  return (
    <View style={[containerStyle, style]}>
      <View style={{flexDirection: 'row'}}>
        {lableIcon}
        <Text style={[textStyle, {color: titleColor}]}>{title}</Text>
      </View>
      {children}
    </View>
  );
};
const margin = 10;
export const inputStyles = StyleSheet.create({
  containerStyle: {
    // flex: 1,
    margin,
  },
  textStyle: {
    fontFamily: Fonts.GoogleSansBold,
    fontSize: 14,
    color: theme.colors.black,
    marginBottom: margin,
  },
  textInputStyle: {
    fontFamily: Fonts.GoogleSansRegular,
    padding: 10,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: theme.colors.borderColorGray,
    height: 40,
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
  },
});
export default Input;

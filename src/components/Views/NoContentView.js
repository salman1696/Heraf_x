import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';

const NoContentView = ({image, title}) => {
  const {containerStyle, imageStyle, textStyle} = styles;
  return (
    <View style={containerStyle}>
      <Image style={imageStyle} source={image} />
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

const margin = 14;
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin,
  },
  imageStyle: {
    height: 200,
    width: 200,
    margin,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: Fonts.GoogleSansBold,
    color: theme.colors.lightGray,
    margin,
  },
});

export {NoContentView};

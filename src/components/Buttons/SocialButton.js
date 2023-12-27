import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SocialButton = ({style, color, icon, onPress}) => {
  const {containerStyle, imageViewStyle, imageStyle} = styles;

  return (
    <TouchableOpacity
      style={[{backgroundColor: color}, containerStyle, style]}
      onPress={onPress}>
      <View style={imageViewStyle}>
        <Image style={imageStyle} source={icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    margin: 14,
    height: 50,
    borderRadius: 50,
    width: 50,
  },
  imageViewStyle: {
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 30,
  },
  imageStyle: {
    height: 30,
    width: 30,
    margin: 5,
  },
});

export {SocialButton};

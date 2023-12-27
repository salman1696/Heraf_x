import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Fonts} from '../../utils/Fonts';
import propTypes from 'prop-types';

const CustomText = ({
  title,
  color,
  type,
  size,
  left,
  padding,
  flex,
  textAlign,
  style,
  top,
  numberOfLines,
  children,
  marginVertical,
  onLongPress,
  paddingHorizontal,
  onPress,
  marginTop,
  disabled,
}) => {
  const {normalStyle, semiBoldStyle, boldStyle} = styles;
  const textStyle = type === 'normal' ? normalStyle : boldStyle;
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Text
        numberOfLines={numberOfLines}
        onLongPress={onLongPress}
        style={[
          style,
          textStyle,
          {
            paddingHorizontal,
            marginVertical,
            color,
            top,
            flex,
            left,
            padding,
            textAlign,
            fontSize: size,
            fontFamily: type,
            marginTop,
          },
        ]}>
        {title}
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const margin = 2;
const styles = StyleSheet.create({
  normalStyle: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 14,
    margin,
  },
  semiBoldStyle: {
    fontFamily: Fonts.MulishMedium,
    fontSize: 16,
    margin,
  },
  boldStyle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
    margin,
  },
});

CustomText.propTypes = {
  type: propTypes.string,
  color: propTypes.string,
  title: propTypes.string,
  textAlign: propTypes.string,
  style: propTypes.any,
};

export {CustomText};

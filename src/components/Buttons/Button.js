/** @format */

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Fonts } from '../../utils/Fonts';
import propTypes from 'prop-types';
import theme from '../../theme';

const Button = ({

  style,
  backgroundColor,
  textColor,
  title,
  enable = true,
  onPress,
  loading,
}) => {
  const { containerStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        {
          opacity: enable ? 1 : 0.3,
          backgroundColor,
        },
        containerStyle,
        style,
      ]}
      disabled={!enable}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'small'} color={textColor} />
      ) : (
        <Text style={[{ color: textColor }, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
const margin = 20;
const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    marginTop: margin * 2,
    shadowColor: theme.colors.lightGray,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 20,
    shadowOpacity: 0.9,
    elevation: 5,
  },
  textStyle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 12,
    margin: margin / 2,
  },
});

Button.propTypes = {
  backgroundColor: propTypes.string,
  textColor: propTypes.string,
  title: propTypes.string.isRequired,
  onPress: propTypes.func,
  enable: propTypes.bool,
  style: propTypes.object,
};

export { Button };

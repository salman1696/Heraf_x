import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import theme from '../../theme';
import {CustomText} from '../Text/Text';

const LoadingView = ({overlay = false, title, textColor}) => {
  const backgroundColor = overlay ? theme.colors.white : theme.colors.black;
  const opacity = overlay ? 0.7 : 1;
  const {containerStyle} = styles;
  return (
    <View style={[{backgroundColor, opacity}, containerStyle]}>
      <ActivityIndicator size="large" color={theme.colors.black} />
      <CustomText title={title} color={textColor} style={{marginTop: 5}} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
  },
});

export {LoadingView};

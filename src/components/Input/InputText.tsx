import React from 'react';
import { TextInput } from 'react-native';
import Input, { inputStyles } from './Input';
import propTypes from 'prop-types';
import theme from '../../theme';
const InputText = ({
  style,
  title,
  titleColor,
  lableIcon,
  onChangeText,
  value,
  secure,
  placeholder,
  children,
}: {
  style: any,
  title: any,
  titleColor: any,
  lableIcon: any,
  onChangeText: any,
  value: any,
  secure: any,
  placeholder: any,
  children: any,
}) => {
  const { textInputStyle } = inputStyles;

  return (
    <Input
      style={style}
      title={title}
      titleColor={titleColor}
      lableIcon={lableIcon}>
      <TextInput
        style={textInputStyle}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        autoCapitalize={'none'}
        placeholderTextColor={theme.colors.lightGray}
        secureTextEntry={secure ? true : false}
        clearButtonMode={'while-editing'}></TextInput>
      {children}
    </Input>
  );
};

InputText.propTypes = {
  style: propTypes.object,
  title: propTypes.string,
  lableIcon: propTypes.element,
  onChangeText: propTypes.func,
  value: propTypes.string,
  secure: propTypes.bool,
};

export { InputText };

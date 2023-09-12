import React, { useState } from 'react'

import { StyleSheet, TextInput, View, ViewStyle, KeyboardType, Text, ReturnKeyTypeOptions, TouchableOpacity, TextStyle } from 'react-native'

import * as Animatable from 'react-native-animatable';

import { Icon, Icons } from './Icon';
import MText from './Text';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { w } from '../utils';
import LinearGradient from 'react-native-linear-gradient';
import { Row } from './Wrapper';

type autoCapitalize = 'none' | 'sentences' | 'words' | 'characters' | undefined;
interface InputProp {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  onBlur?: (value: any) => void;
  onFocus?: () => void;
  inputRef?: React.Ref<any>;
  inputContainer?: ViewStyle | ViewStyle[];
  inputStyle?: ViewStyle | ViewStyle[];
  keyboardType?: KeyboardType;
  onPress?: (value: any) => void;
  error?: string;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number | undefined;
  editable?: boolean;
  autoCapitalize?: autoCapitalize;
  textContentType?: "none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | undefined;
  multiline?: boolean;
  onPressButton?: () => void;
  buttonText?: string;
  showButton?: boolean;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  colors?: any;
  label?: string;
  labelStyle?: TextStyle;
  SvgIcon?: any,
  inputLayoutStyle?: ViewStyle;
}

const InputBox = ({
  inputRef,
  value,
  onChangeText,
  placeholder,
  onBlur,
  onFocus,
  inputContainer,
  inputStyle,
  keyboardType,
  onSubmitEditing,
  blurOnSubmit,
  returnKeyType,
  maxLength,
  onPress,
  error,
  editable,
  autoCapitalize,
  textContentType,
  multiline,
  onPressButton,
  buttonText,
  showButton,
  textAlignVertical,
  placeholderTextColor,
  secureTextEntry,
  colors,
  label,
  labelStyle,
  SvgIcon,
  inputLayoutStyle,
}: InputProp) => {
  const [focused, setFocused] = useState<boolean>(false);

  const borderColor = error ? Colors.red : focused ? Colors.primary : Colors.gray3;

  return (
    <View style={{ width: Size.wWidth / 1.1, alignSelf: "center", ...inputLayoutStyle }}>
      {label && <MText style={{ ...styles.label, ...labelStyle }}>{label}</MText>}
      <LinearGradient
        colors={colors ? colors : ["#000", "#000"]}
        style={[styles.inputContainer, inputContainer]}
      >
        <Row>
          {SvgIcon && <View style={{ width: 30 }}>
            {SvgIcon}
          </View>}
          <TextInput style={[styles.input, { borderColor }, inputStyle]}
            textAlignVertical={textAlignVertical}
            onPressIn={onPress}
            ref={inputRef}
            autoCapitalize={autoCapitalize}
            placeholder={placeholder || ''}
            placeholderTextColor={placeholderTextColor}
            defaultValue={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            onFocus={() => {
              onFocus && onFocus()
              setFocused(true)
            }}
            maxLength={maxLength}
            multiline={multiline}
            editable={editable}
            onBlur={(e) => {
              onBlur && onBlur(e)
              setFocused(false)
            }}
            onSubmitEditing={() => {
              onSubmitEditing && onSubmitEditing()
              setFocused(false)
            }}
            blurOnSubmit={blurOnSubmit}
            returnKeyType={returnKeyType}
            textContentType={textContentType}
            secureTextEntry={secureTextEntry}
          />
        </Row>

        {showButton && <TouchableOpacity
          onPress={onPressButton}
          style={styles.absButton}>
          <MText marginHorizontal={Size.s}>{buttonText}</MText>
          <Icon type={Icons.Feather} name='chevron-down' />
        </TouchableOpacity>}

        {!!error && <Animatable.View animation="fadeInRight" duration={300}>
          <MText style={Styles.error}>{error}</MText>
        </Animatable.View>}
      </LinearGradient>
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
  input: {
    padding: Size.s,
    borderWidth: 0,
    borderRadius: Size.s12,
    color: Colors.white,
    height: w(12),
    fontSize: Size.s14,
  },
  inputContainer: {
    marginVertical: Size.s,
    width: "100%",
    marginTop: 10
  },
  errorMsg: {
    fontSize: Size._12,
    color: Colors.red,
    marginTop: 1
  },
  absButton: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: Size.s12,
    ...Styles.rowView,
  },
  label: {
    fontSize: Size.s14,
    color: "#fff",
    fontWeight: "400",
    marginBottom: -4
  }
})

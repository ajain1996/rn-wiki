import React from 'react'

import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  View,
  ActivityIndicator,
  ImageStyle,
  TouchableHighlight
} from 'react-native'

import { Icon } from './Icon';

import MText from './Text';

import { Row } from './Wrapper';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { h, w } from '../utils';

type IconPosition = 'right' | 'left';
type mode = 'text' | 'outlined' | 'contained' | 'elevated'
interface MyButtonProps {
  style?: StyleProp<ViewStyle>;
  title?: string | null;
  image?: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconColor?: string;
  iconType?: Function;
  iconPosition?: IconPosition;
  textStyle?: TextStyle;
  SvgIcon?: any;
  mode?: mode;
  color?: string;
  loaderColor?: string;
  loaderSize?: number;
  iconSize?: number;
  iconStyle?: ImageStyle;
  underlayColor?: string;
}

const MyButton = ({
  style,
  title,
  onPress,
  loading,
  disabled,
  icon,
  iconColor,
  iconType,
  iconPosition,
  textStyle,
  SvgIcon,
  mode,
  color,
  loaderColor,
  iconSize,
  iconStyle,
  underlayColor,
}: MyButtonProps) => {
  const isIconAvailable = !!icon && !!iconType;
  const buttonBg = disabled ? Colors.gray6 : Colors.primary;

  let rowStyle = {}
  if (iconPosition) {
    rowStyle = { flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row' }
  }

  const btnStyle = () => {
    const buttonStyles = [
      styles.container,
      style,
    ]
    switch (mode) {
      case 'contained':
        return [
          ...buttonStyles,
        ]
      case 'outlined':
        return [
          ...buttonStyles,
          {
            backgroundColor: null,
            borderWidth: 1,
            borderColor: Colors.primary,
          }
        ]
      case 'text':
        return [
          ...buttonStyles,
          {
            backgroundColor: null,
          }
        ]
      case 'elevated':
        return [
          ...buttonStyles,
          {
            elevation: Size.vs,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.5,
            shadowRadius: Size.vs,
            shadowColor: Colors.shadowColor,
          }
        ]
    }
    return buttonStyles;
  }

  const titleColor = mode === 'outlined' || mode === 'text' ? Colors.primary : Colors.white;

  return (
    <TouchableHighlight
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}
      style={btnStyle()}
      underlayColor={underlayColor}
    >
      {loading ? (
        <ActivityIndicator size="small" color={loaderColor} />
      ) : (
        <Row style={rowStyle}>
          {isIconAvailable && (
            <Icon
              type={iconType}
              name={icon}
              color={iconColor}
              size={iconSize}
              style={iconStyle}
            />
          )}
          {SvgIcon && <View style={{ width: 28, alignItems: "center" }}>
            {SvgIcon}
          </View>}
          {title && <MText
            style={[
              styles.text,
              textStyle ? textStyle : {},
            ]}
            color={color ? color : titleColor || Colors.white}>
            {title}
          </MText>}
        </Row>
      )}
    </TouchableHighlight>
  )
};

MyButton.defaultProps = {
  loaderColor: Colors.white,
  iconColor: Colors.white,
}

const styles = StyleSheet.create({
  container: {
    ...Styles.centered,
    height: h(5.8), //50
    backgroundColor: Colors.primary,
    borderRadius: Size.s12,
  },
  text: {
    fontSize: Size.m,
    bottom: 1,
    textTransform: 'capitalize',
    color: "#F2F2F2",
  },
  icon: {
    // marginTop: 2,
  }
});

export default MyButton;

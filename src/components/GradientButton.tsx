import React from 'react'

import {
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
    View,
    ActivityIndicator,
    ImageStyle
} from 'react-native'

import { Icon } from './Icon';

import MText from './Text';

import { Row } from './Wrapper';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { h, w } from '../utils';
import LinearGradient from 'react-native-linear-gradient';

type IconPosition = 'right' | 'left';
type mode = 'text' | 'outlined' | 'contained' | 'elevated'
interface GradientButtonProps {
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
    br?: number;
    colors?: any;
}

const GradientButton = ({
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
    br,
    colors,
}: GradientButtonProps) => {
    const isIconAvailable = !!icon && !!iconType;
    const buttonBg = disabled ? Colors.gray6 : Colors.primary;

    let rowStyle = {}
    if (iconPosition) {
        rowStyle = { flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row' }
    }

    const paddingHorizontal = isIconAvailable ? Size.xs : 0;

    const titleColor = mode === 'outlined' || mode === 'text' ? Colors.primary : Colors.white;

    return (
        <LinearGradient
            colors={colors ? colors : ["#0B9FF3", "#0B68F3"]}
            style={[style, { borderRadius: br ? br : Size.s12, ...Styles.centered }]}
        >
            <TouchableOpacity
                disabled={disabled}
                activeOpacity={0.7}
                onPress={onPress}
                style={[{ width: "100%", height: 52, ...Styles.centered }]}
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
                        {SvgIcon && <SvgIcon />}
                        {title && <MText
                            style={[
                                styles.text,
                                { paddingHorizontal },
                                textStyle ? textStyle : {},
                            ]}
                            color={color ? color : titleColor || Colors.white}>
                            {title}
                        </MText>}
                    </Row>
                )}
            </TouchableOpacity>
        </LinearGradient>
    )
};

GradientButton.defaultProps = {
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
        textTransform: 'capitalize'
    },
    icon: {
        // marginTop: 2,
    }
});

export default GradientButton;

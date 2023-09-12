import React from 'react'

import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground, StyleSheet, ViewStyle } from 'react-native';
import images from '../assets/images';
import { Size } from '../constants';

export interface LinearGradContainerProps {
    backgroundColor?: string;
    children?: React.ReactNode;
    style?: ViewStyle;
}

const LinearGradContainer = ({
    children,
    backgroundColor,
    style,
}: LinearGradContainerProps) => {
    return (
        <LinearGradient
            colors={["#14051F", "#14051F", "#14051F", "#000", "#000", "#000"]}
            style={[styles.container, { backgroundColor }, style]}
        >
            {children}
        </LinearGradient>
    )
};

export const GradContainer = ({
    children,
    style,
}: LinearGradContainerProps) => {
    return (
        <ImageBackground
            source={images.grad_bg}
            resizeMode="stretch"
            style={[styles.container2, style]}
        >
            {children}
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        width: Size.wWidth,
        height: Size.wHeight + 40,
    },
    container2: {
        width: Size.wWidth,
        height: Size.wHeight + 40,
        paddingTop: 40
    }
})

export default LinearGradContainer;

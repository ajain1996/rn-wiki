import React from 'react'
import { ScrollView, ViewStyle } from 'react-native';

export interface CustomScrollProps {
    children?: React.ReactNode;
    style?: ViewStyle;
}

const CustomScroll = ({
    children,
    style,
}: CustomScrollProps) => {
    return (
        <ScrollView
            keyboardShouldPersistTaps="always"
            contentContainerStyle={style}
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    )
};
export default CustomScroll;
import React from 'react'
import GradientButton from '../GradientButton'
import Icons from '../Icon/Icons'

interface BackButtonProps {
    onPress: () => void;
}

export default function BackButton({ onPress }: BackButtonProps) {
    return (
        <GradientButton
            icon='arrow-back'
            iconType={Icons.Ionicons}
            iconColor='#fff'
            iconSize={16}
            br={100}
            style={{ width: 36, height: 36, borderRadius: 100, elevation: 20, shadowColor: "#565479" }}
            colors={["#424167", "#424167", "#16182C"]}
            onPress={onPress}
        />
    )
}
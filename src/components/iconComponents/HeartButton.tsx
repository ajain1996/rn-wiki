import React from 'react'
import GradientButton from '../GradientButton'
import Icons from '../Icon/Icons'

interface HeartButtonProps {
    onPress: () => void;
}

export default function HeartButton({ onPress }: HeartButtonProps) {
    return (
        <GradientButton
            icon='hearto'
            iconType={Icons.AntDesign}
            iconColor='#fff'
            iconSize={16}
            br={100}
            style={{ width: 36, height: 36, borderRadius: 100, elevation: 20, shadowColor: "#565479" }}
            colors={["#565479", "#16182C"]}
            onPress={onPress}
        />
    )
}
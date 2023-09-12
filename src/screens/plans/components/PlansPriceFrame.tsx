import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import MText from '../../../components/Text'
import images from '../../../assets/images'
import { Styles } from '../../../styles'

interface PlansPriceFrameProps {
    price: string;
}

export default function PlansPriceFrame({ price }: PlansPriceFrameProps) {
    return (
        <ImageBackground resizeMode="contain"
            source={images.PlanFrame} style={styles.priceFrame}
        >
            <MText style={styles.planTitle}>${price}</MText>
            <MText style={styles.planYear}>/yearly</MText>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    planTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#FFF"
    },
    planYear: {
        fontSize: 12,
        fontWeight: "500",
        color: "#FFF"
    },
    priceFrame: {
        width: 60, height: 72,
        ...Styles.centered,
        marginTop: -20,
        marginRight: 20
    }
})
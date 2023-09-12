import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import images from '../../../assets/images'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import MText from '../../../components/Text'
import PlansPriceFrame from './PlansPriceFrame'
import Svg from '../../../assets/svg'
import { Size } from '../../../constants'
import { Styles } from '../../../styles'

interface PlanItemProps {
    title: string;
    price: string;
}

export default function PlanItem({ title, price }: PlanItemProps) {
    return (
        <ImageBackground
            source={images.ProductSubscription} resizeMode="contain"
            style={styles.imageFrame1}
        >
            <View style={styles.image1}>
                <SpaceBetweenRow>
                    <MText style={styles.frameTitle}>{title}</MText>
                    <PlansPriceFrame price={price} />
                </SpaceBetweenRow>

                <Row style={{ margin: 8, marginHorizontal: 36 }}>
                    <Svg.SmallCheckIcon />
                    <MText style={styles.checkTitle}>3 user request</MText>
                </Row>
                <Row style={{ margin: 8, marginHorizontal: 36 }}>
                    <Svg.SmallCheckIcon />
                    <MText style={styles.checkTitle}>10 downloads per day</MText>
                </Row>
                <Row style={{ margin: 8, marginHorizontal: 36 }}>
                    <Svg.SmallCheckIcon />
                    <MText style={styles.checkTitle}>10 downloads per day</MText>
                </Row>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageFrame1: {
        width: Size.wWidth / 1.1, height: 170,
        ...Styles.centered,
        marginTop: "10%"
    },
    image1: {
        width: Size.wWidth / 1.1 - 30,
        height: 168,
        backgroundColor: "#140E27",
        alignSelf: "center",
        borderRadius: 12
    },
    frameTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#FFF",
        marginLeft: 20,
        marginTop: 10
    },
    checkTitle: {
        fontSize: 12,
        fontWeight: "500",
        color: "#C9C9C9",
        marginLeft: 12
    }
})
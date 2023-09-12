import { View, Text, StatusBar, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomScroll from '../../components/CustomScroll'
import LinearGradContainer from '../../components/LinearGradContainer'
import ProfileHeader from '../profile/components/ProfileHeader'
import PlanItem from './components/PlanItem'
import images from '../../assets/images'
import { Size } from '../../constants'
import ImageButton from '../../components/ImageButton'
import { Row } from '../../components/Wrapper'
import MText from '../../components/Text'
import PlanTabs from './components/PlanTabs'

export default function ChoosePlan({ navigation }: any) {
    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" />
            <LinearGradContainer style={styles.container}>
                <ProfileHeader title="Choose a Plan" navigation={navigation} />

                <PlanTabs />

                <PlanItem
                    title="Product Subscription"
                    price="25"
                />

                <PlanItem
                    title="Wiki Network Subscription"
                    price="15"
                />

                <TouchableOpacity style={{ marginTop: 40 }}>
                    <Image
                        source={images.buyProductBtn} resizeMode="contain"
                        style={{ width: Size.wWidth / 1.4, height: 46 }}
                    />
                </TouchableOpacity>

                <ImageButton
                    title="Make Payment"
                    style={{ marginTop: "12%" }}
                />
                <View style={{ paddingTop: "10%" }} />
            </LinearGradContainer>
        </CustomScroll>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 36,
        paddingHorizontal: 16,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff"
    },
})
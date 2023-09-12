import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import CustomScroll from '../../components/CustomScroll'
import LinearGradContainer from '../../components/LinearGradContainer'
import ProfileHeader from '../profile/components/ProfileHeader'
import Svg from '../../assets/svg'
import MText from '../../components/Text'
import ImageButton from '../../components/ImageButton'

export default function PlansScreen({ navigation }: any) {
    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" />
            <LinearGradContainer style={{ paddingTop: 36, paddingHorizontal: 16 }}>
                <ProfileHeader title="Plans" navigation={navigation} />
                <View style={{ alignItems: "center", marginTop: "20%" }}>
                    <Svg.PlansIcon />

                    <View style={{ marginTop: "10%", alignItems: "center" }}>
                        <MText style={styles.title}>Try WiKi Free for 1 Year</MText>

                        <MText style={styles.subText}>
                            Enter the email associated with your account and we’ll send an email with instructions to reset your password.
                        </MText>

                        <ImageButton
                            title="Start"
                            style={{ marginTop: "10%" }}
                            onPress={() => { navigation?.navigate("ChoosePlan") }}
                        />
                    </View>
                </View>
            </LinearGradContainer>
        </CustomScroll>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#fff",
        marginTop: "20%",
    },
    subText: {
        fontSize: 16,
        color: "#D8D8D8",
        textAlign: "center",
        marginTop: 20,
        lineHeight: 22
    }
})
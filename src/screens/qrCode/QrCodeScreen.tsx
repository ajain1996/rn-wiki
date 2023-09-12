import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomScroll from '../../components/CustomScroll'
import LinearGradContainer from '../../components/LinearGradContainer'
import ProfileHeader from '../profile/components/ProfileHeader'
import { Styles } from '../../styles'
import Svg from '../../assets/svg'
import images from '../../assets/images'
import { Size } from '../../constants'
import MText from '../../components/Text'
import { SpaceBetweenRow } from '../../components/Wrapper'
import ImageButton from '../../components/ImageButton'

export default function QrCodeScreen({ navigation }: any) {
    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" />
            <LinearGradContainer style={{ paddingTop: 36, paddingHorizontal: 16 }}>
                <ProfileHeader title="QR Code" navigation={navigation} />

                <View style={styles.userProfile}>
                    <Svg.UserProfileIcon width="80" height="80" />
                </View>

                <Image
                    source={images.qr_code} resizeMode="contain"
                    style={styles.qrImage}
                />

                <MText style={styles.fullName}>Yashasvi Dongre</MText>

                <MText style={styles.saveQrCode}>Tap to save QR code in your phone</MText>

                <View style={styles.bottomBg}>
                    <SpaceBetweenRow>
                        <View>
                            <MText style={styles.likeToMyBusiness}>Like to my Business Card</MText>
                            <MText style={styles.username}>@yashasvi</MText>
                        </View>

                        <Svg.CopyIcon />
                    </SpaceBetweenRow>
                    <ImageButton
                        title="Share the Link"
                        style={{ marginTop: 14 }}
                    />
                </View>
            </LinearGradContainer>
        </CustomScroll>
    )
}

const styles = StyleSheet.create({
    userProfile: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: "#19103E",
        ...Styles.centered,
        alignSelf: "center",
        marginTop: 60,
        borderWidth: 0.6,
        borderColor: "#B8B8B891",
        marginBottom: 40,
        paddingLeft: 8,
    },
    qrImage: {
        width: Size.wWidth / 1.6,
        height: Size.wWidth / 1.6,
        alignSelf: "center",
    },
    fullName: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
        marginTop: -14,
        marginLeft: 8,
        alignSelf: "center"
    },
    saveQrCode: {
        fontSize: 14,
        color: "#fff",
        alignSelf: "center",
        marginTop: "12%",
    },
    likeToMyBusiness: {
        fontSize: 14,
        color: "#fff",
        marginTop: "12%",
    },
    username: {
        color: "#DEDEDE",
        marginTop: 8
    },
    bottomBg: {
        width: Size.wWidth,
        padding: 20,
        paddingTop: "6%",
        position: "absolute",
        bottom: 10,
        backgroundColor: "#0F0F0F",
        alignSelf: "center"
    }
})
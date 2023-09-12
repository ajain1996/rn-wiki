import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import ProfileHeader from './components/ProfileHeader'
import ProfileHeader2 from './components/ProfileHeader2'
import MyButton from '../../components/MyButton'
import Svg from '../../assets/svg'
import { SpaceBetweenRow } from '../../components/Wrapper'
import { Styles } from '../../styles'
import MText from '../../components/Text'
import svg from '../../assets/svg'

export default function MyProfileScreen({ navigation }: any) {
    return (
        <GradContainer>
            <StatusBar translucent backgroundColor="transparent" />
            <ProfileHeader2 title="My Profile" navigation={navigation} />

            <SpaceBetweenRow style={styles.card}>
                <MyButton
                    title="View"
                    style={styles.smallButton}
                    textStyle={styles.smallbtnText}
                    SvgIcon={<Svg.EyeIcon />}
                    iconPosition="right"
                />

                <View>
                    <View style={styles.userProfile}>
                        <Svg.UserProfileIcon width="140" height="140" />
                        <View style={{ height: 6 }} />

                        <View style={styles.editBg}>
                            <Svg.EditIcon />
                        </View>
                    </View>
                    <MText style={styles.userName}>Yashasvi Dongre</MText>
                </View>

                <MyButton
                    title="View"
                    style={styles.smallButton}
                    textStyle={styles.smallbtnText}
                    SvgIcon={<Svg.ShareSmallIcon />}
                    iconPosition="right"
                />
            </SpaceBetweenRow>

            <MyButton
                title="Stats & Overview"
                style={styles.button}
                textStyle={styles.buttonTitle}
                SvgIcon={<Svg.QRcodeIcon />}
                underlayColor="#262626"
                onPress={() => { navigation.navigate("PlansScreen") }}
            />

            <MyButton
                title="QR Code"
                style={styles.button}
                textStyle={styles.buttonTitle}
                SvgIcon={<Svg.QRscanIcon />}
                underlayColor="#262626"
                onPress={() => { navigation.navigate("QrCodeScreen") }}
            />

            <MyButton
                title="Points Collected"
                style={styles.button}
                textStyle={styles.buttonTitle}
                SvgIcon={<Svg.PointsDollarsIcon />}
                underlayColor="#262626"
                onPress={() => { navigation.navigate("PointsCollectedScreen") }}
            />

            <MyButton
                title="Pause Product"
                style={styles.button}
                textStyle={styles.buttonTitle}
                SvgIcon={<Svg.PauseIcon />}
                underlayColor="#262626"
                onPress={() => { navigation.navigate("PauseScreen") }}
            />

            <MyButton
                title="Referral"
                style={styles.button}
                textStyle={styles.buttonTitle}
                SvgIcon={<Svg.ReferralPointsIcon />}
                underlayColor="#262626"
                onPress={() => { navigation.navigate("ReferFriendScreen") }}
            />
        </GradContainer>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "#F7F7F700",
        padding: 20,
        borderRadius: 12,
        backgroundColor: "#121019",
        margin: 20,
        alignItems: "flex-start"
    },
    smallButton: {
        width: 72,
        height: 28,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#B8B8B847",
        marginTop: -16
    },
    smallbtnText: {
        fontSize: 12,
        fontWeight: "300",
        color: "#B2B2B2",
        marginRight: 4
    },
    userProfile: {
        width: 148,
        height: 148,
        borderRadius: 100,
        backgroundColor: "#19103E",
        ...Styles.centered,
        alignSelf: "center",
        marginTop: -60,
        borderWidth: 0.6,
        borderColor: "#B8B8B891",
        marginBottom: 40,
        paddingTop: 14,
        paddingLeft: 12,
    },
    editBg: {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: "#FFFFFF",
        ...Styles.centered,
        marginTop: -20
    },
    userName: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
        marginTop: -14,
        marginLeft: 8
    },
    button: {
        width: "100%",
        height: 60,
        backgroundColor: "transparent",
        borderRadius: 4,
        alignItems: "flex-start",
        paddingHorizontal: 28,
        paddingVertical: 20,
        marginVertical: 6
    },
    buttonTitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#F2F2F2",
        marginLeft: 20
    },
})
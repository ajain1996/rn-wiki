import { View, Text, StatusBar, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import ProfileHeader from '../profile/components/ProfileHeader'
import images from '../../assets/images'
import { Row, SpaceBetweenRow } from '../../components/Wrapper'
import Svg from '../../assets/svg'
import { Size } from '../../constants'
import MText from '../../components/Text'
import CustomScroll from '../../components/CustomScroll'
import ImageButton from '../../components/ImageButton'

export default function ReferFriendScreen({ navigation }: any) {
    return (
        <GradContainer>
            <StatusBar translucent backgroundColor="transparent" />
            <ProfileHeader title="Points Collected" navigation={navigation} />

            <CustomScroll>
                <View style={{ alignItems: "center" }}>
                    <MText style={styles.Referyourfriends}>Refer your friends</MText>
                    <MText style={styles.SubText}>You and your colleague will get  </MText>
                    <Svg.OneReferralCoins />

                    <ImageBackground
                        source={images.imageButton} borderRadius={6}
                        style={styles.totalRewards}
                    >
                        <SpaceBetweenRow>
                            <Row>
                                <Svg.CoinCurrencyIcon />
                                <View style={{ marginLeft: 12 }}>
                                    <MText style={styles.TotalRewardsText}>Total Rewards</MText>
                                    <MText style={styles.TotalRewardsCount}>0 Coins</MText>
                                </View>
                            </Row>
                            <Svg.RightIconIcon />
                        </SpaceBetweenRow>
                    </ImageBackground>

                    <Image
                        source={images.referralWorks} resizeMode="contain"
                        style={styles.referralWorks}
                    />

                    <View style={styles.copyBg}>
                        <MText style={styles.copyLink}>https://wikireferral203/yashasvido...</MText>
                        <Svg.CopyIcon />
                    </View>

                    <MText style={styles.FrequentlyAskedQuestions}>Frequently Asked Questions</MText>

                    <View style={styles.copyBg}>
                        <MText style={styles.copyLink}>What is refer and earn program?</MText>
                        <Svg.DownArrowIcon />
                    </View>

                    <View style={styles.copyBg}>
                        <MText style={styles.copyLink}>Why we use this</MText>
                        <Svg.DownArrowIcon />
                    </View>

                    <View style={styles.copyBg}>
                        <MText style={styles.copyLink}>What is refer and earn program?</MText>
                        <Svg.DownArrowIcon />
                    </View>

                    <View style={styles.copyBg}>
                        <MText style={styles.copyLink}>Why we use this</MText>
                        <Svg.DownArrowIcon />
                    </View>

                    <ImageButton
                        title="Invite Now"
                        style={{ marginTop: 32 }}
                        onPress={() => { }}
                    />
                </View>
                <View style={{ marginTop: "10%" }} />
            </CustomScroll>
        </GradContainer>
    )
}

const styles = StyleSheet.create({
    totalRewards: {
        width: Size.wWidth / 1.32,
        height: 68,
        alignSelf: "center",
        justifyContent: "center",
        paddingHorizontal: 14,
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 28
    },
    TotalRewardsText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFF"
    },
    TotalRewardsCount: {
        color: "#B0B0B0"
    },
    Referyourfriends: {
        fontSize: 24,
        fontWeight: "700",
        color: "#FFF"
    },
    SubText: {
        fontSize: 16,
        color: "#B0B0B0",
        marginBottom: 16
    },
    referralWorks: {
        width: Size.wWidth / 1.1,
        height: Size.wWidth / 1.1,
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 8,
    },
    copyBg: {
        width: "90%",
        height: 54,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#262626",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 32,
    },
    copyLink: {
        color: "#DBDBDB",
        marginTop: -4,
    },
    FrequentlyAskedQuestions: {
        fontSize: 14,
        color: "#FFF",
        marginLeft: 22,
        alignSelf: "flex-start",
        marginTop: "8%"
    },
})
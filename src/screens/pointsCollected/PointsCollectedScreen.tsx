import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import ProfileHeader from '../profile/components/ProfileHeader'
import MText from '../../components/Text'
import { Container, Row, SpaceBetweenRow } from '../../components/Wrapper'
import Svg from '../../assets/svg'
import LinearGradient from 'react-native-linear-gradient'
import MyButton from '../../components/MyButton'
import { Size } from '../../constants'
import { Styles } from '../../styles'
import CustomScroll from '../../components/CustomScroll'

export default function PointsCollectedScreen({ navigation }: any) {
    return (
        <GradContainer>
            <StatusBar translucent backgroundColor="transparent" />
            <ProfileHeader title="Points Collected" navigation={navigation} />

            <CustomScroll>
                <Container style={styles.container}>
                    <MText style={styles.welcomeTo}>Welcome to</MText>
                    <Svg.WiKiRewardsIcon />

                    <LinearGradient
                        colors={["#13139280", "#A310C080"]}
                        style={styles.frameBlock}
                    >
                        <Svg.StarClipartIcon />
                        <MText style={styles.totalEarnings}>Total Earnings</MText>
                        <MyButton
                            title={"250 Coins"}
                            style={styles.coinsBtn}
                            textStyle={styles.coinsBtnText}
                            SvgIcon={<Svg.CoinColorIcon />}
                        />
                    </LinearGradient>

                    <TouchableOpacity style={styles.RedeemPointsBtn}>
                        <Row>
                            <Svg.GiftIcon />
                            <View style={{ width: 8 }} />
                            <Svg.RedeemPointsIcon />
                        </Row>
                    </TouchableOpacity>

                    <View style={styles.referBlock}>
                        <SpaceBetweenRow>
                            <MText style={styles.Referyourfriends}>Refer your friends</MText>
                            <Svg.RightIconIcon />
                        </SpaceBetweenRow>
                        <View style={{ paddingLeft: 20 }}>
                            <Row style={Styles.marginTopMid}>
                                <Svg.SmallCircleIcon />
                                <MText style={styles.ReferSubText}>Refer your friends</MText>
                            </Row>
                            <Row style={Styles.marginTop}>
                                <Svg.SmallCircleIcon />
                                <MText style={styles.ReferSubText}>Refer your friends</MText>
                            </Row>
                        </View>

                        <View style={styles.copyBg}>
                            <MText style={styles.copyLink}>https://wikireferral203/yashasvido...</MText>
                            <Svg.CopyIcon />
                        </View>
                    </View>
                    <MText />

                    <MText style={styles.ReferSubText}>Frequently Asked Questions</MText>

                    <View style={styles.copyBg}>
                        <MText style={styles.copyLink}>How to Redeem Coins</MText>
                        <Svg.DownArrowIcon />
                    </View>

                    <View style={styles.copyBg}>
                        <MText style={styles.copyLink}>Why we use this</MText>
                        <Svg.DownArrowIcon />
                    </View>

                    {/* <MyButton
                    title="Redeem Points"
                    
                    textStyle={styles.RedeemPointsText}
                    SvgIcon={}
                /> */}
                </Container>
            </CustomScroll>
        </GradContainer>
    )
}

const styles = StyleSheet.create({
    welcomeTo: {
        color: "#FFFFFF",
        marginBottom: 10
    },
    container: {
        padding: 20
    },
    frameBlock: {
        alignItems: "center",
        paddingTop: 20,
        borderRadius: 8,
        marginTop: "8%"
    },
    totalEarnings: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFF",
        position: "absolute",
        top: 15,
    },
    coinsBtn: {
        width: 144,
        height: 34,
        borderRadius: 50,
        backgroundColor: "#9084A3",
        position: "absolute",
        top: 50,
    },
    coinsBtnText: {
        fontSize: 16,
        fontWeight: "800",
        color: "#FFFFFF",
        marginLeft: 10,
    },
    RedeemPointsBtn: {
        width: Size.wWidth / 1.1,
        height: 51,
        borderRadius: 8,
        backgroundColor: "#FFF",
        ...Styles.centered,
        marginTop: 12
    },
    RedeemPointsText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FB4FFD",
    },
    referBlock: {
        width: Size.wWidth / 1.1,
        padding: 20,
        backgroundColor: "#150F21",
        borderRadius: 8,
        paddingBottom: 28,
        marginTop: 20
    },
    Referyourfriends: {
        fontSize: 16,
        fontWeight: "700",
        color: "#FFF",
    },
    ReferSubText: {
        fontSize: 12,
        color: "#DBDBDB",
        marginLeft: 8
    },
    copyBg: {
        width: "100%",
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
    }
})
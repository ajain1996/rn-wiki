import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import Svg from '../../assets/svg'
import { Styles } from '../../styles'
import MText from '../../components/Text'
import ImageButton from '../../components/ImageButton'
import { Row } from '../../components/Wrapper'

export default function CheckYourEmail({ navigation }: any) {
    return (
        <GradContainer>
            <CustomHeader title="" />

            <View style={styles.container}>
                <View style={styles.Email18Icon}>
                    <Svg.Email18Icon />
                </View>
                <MText style={styles.Checkyoumail}>Check you mail</MText>
                <MText style={styles.subText}>
                    We have sent a password recover instructions to your mail.
                </MText>

                <ImageButton
                    title="Open email app"
                    style={{ marginTop: "10%" }}
                    onPress={() => { navigation?.navigate("CreateNewPassword") }}
                />

                <MText style={styles.subText2}>Skip, I’ll confirm later</MText>

                <View style={styles.footer}>
                    <MText style={styles.footerText}>
                        Did not receive the email? Check your spam,
                    </MText>
                    <Row style={{ justifyContent: "center" }}>
                        <MText style={styles.footerText}>or </MText>
                        <MText style={styles.footerText2}>try another email address</MText>
                    </Row>
                </View>
            </View>
        </GradContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: "20%",
        padding: 20,
        height: "76%"
    },
    Email18Icon: {
        width: 120,
        height: 120,
        ...Styles.centered,
        backgroundColor: "#0C052C",
        borderRadius: 8
    },
    Checkyoumail: {
        fontSize: 24,
        fontWeight: "700",
        color: "#FFF",
    },
    subText: {
        fontSize: 16,
        color: "#D8D8D8",
        textAlign: "center",
        lineHeight: 19,
        marginTop: 10
    },
    subText2: {
        fontSize: 16,
        fontWeight: "500",
        color: "#515151",
        textAlign: "center",
        marginTop: "8%"
    },
    footer: {
        position: "absolute",
        bottom: 10,
    },
    footerText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#D8D8D8",
        lineHeight: 22,
        textAlign: "center",
    },
    footerText2: {
        fontSize: 16,
        fontWeight: "600",
        color: "#A310C0",
        lineHeight: 22,
        textAlign: "center",
    }
})
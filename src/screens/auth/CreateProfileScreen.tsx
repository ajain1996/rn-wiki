import { View, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Svg from '../../assets/svg'
import { GradContainer } from '../../components/LinearGradContainer'
import MText from '../../components/Text'
import ImageButton from '../../components/ImageButton'
import { Row } from '../../components/Wrapper'

export default function CreateProfileScreen({ navigation }: any) {
    return (
        <GradContainer>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={{ alignItems: "center" }}>
                <MText style={styles.heading}>Welcome to WiKi</MText>

                <Row style={{ alignItems: "flex-start" }}>
                    <View style={styles.asterikBg}>
                        <Svg.AsterikIcon />
                    </View>
                    <Svg.CreateProfileIcon />
                    <View style={styles.upCamera}>
                        <Svg.UpCameraIcon />
                    </View>
                </Row>

                <MText style={styles.subText}>
                    Others don’t need an app to connect with you. All it takes is an NFC-enabled device and one tap of your super smart card to instantly share all your contact details with the person next to you.
                </MText>
            </View>

            <ImageButton
                title="Let’s Create Profile"
                style={styles.button}
                onPress={() => { navigation?.navigate("UpdateProfile") }}
            />
        </GradContainer>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 32,
        fontWeight: "700",
        marginHorizontal: 20,
        marginTop: "10%",
        marginBottom: "20%",
        alignSelf: "center",
    },
    subText: {
        fontSize: 16,
        fontWeight: "400",
        marginHorizontal: 20,
        marginTop: "20%",
        marginBottom: "8%",
        alignSelf: "center",
        lineHeight: 22,
        textAlign: "center",
    },
    button: {
        marginTop: 40,
        marginHorizontal: 20,
        position: "absolute",
        bottom: 34
    },
    asterikBg: {
        marginRight: -40,
        marginTop: 30
    },
    upCamera: {
        marginLeft: -20,
        marginTop: 10
    }
})
import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import MText from '../../components/Text'
import RippleButton from '../../components/RippleButton'

export default function MyProductsScreen({ navigation }: any) {
    return (
        <GradContainer style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <MText style={styles.title}>My Projects</MText>

            <RippleButton
                title="My Card"
                mode='contained'
                style={styles.button}
                textStyle={styles.buttonTitle}
                color="#000"
                onPress={() => { navigation?.navigate("MyCardScreen") }}
            />

            <RippleButton
                title="My Profile"
                mode='contained'
                style={styles.button}
                textStyle={styles.buttonTitle}
                color="#000"
                onPress={() => { navigation?.navigate("Root") }}
            />

        </GradContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        paddingTop: "18%",
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#fff",
        marginVertical: "12%"
    },
    button: {
        width: "70%",
        height: 48,
        backgroundColor: "#fff",
        borderRadius: 4,
        marginTop: 26
    },
    buttonTitle: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000"
    },
})
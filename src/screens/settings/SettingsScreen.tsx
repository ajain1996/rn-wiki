import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import MyButton from '../../components/MyButton'
import svg from '../../assets/svg'
import Svg from '../../assets/svg'
import MText from '../../components/Text'

export default function SettingsScreen({ navigation }: any) {
    return (
        <GradContainer>
            <CustomHeader title="Settings" />

            <View style={styles.container}>
                <MyButton
                    title="Language"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.PerdonalInformationIcon />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("LanguageScreen") }}
                />

                <View style={styles.divider} />

                <MyButton
                    title="Time Format"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.TimeFastCoins />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("CardTemplatesScreen") }}
                />

                <View style={styles.divider} />

                <MyButton
                    title="Change Password"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.LockIcon />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("ResetPasswordScreen") }}
                />

                <View style={styles.divider} />

                <MyButton
                    title="Plans"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.PriceTagCoins />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("ServicesScreen") }}
                />

                <View style={styles.divider} />

                <MyButton
                    title="Delete Account"
                    style={styles.button}
                    textStyle={styles.deleteButtonTitle}
                    SvgIcon={<Svg.DeleteRedIcon />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("DeleteAccount") }}
                />

                <View style={styles.divider} />

                <MyButton
                    title="Logout"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.LogoutIcon />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("SocialMediaLinks") }}
                />

                <View style={styles.divider} />

                <TouchableOpacity style={styles.tnc}>
                    <MText style={styles.TermsConditions}>Terms & Conditions</MText>
                </TouchableOpacity>
            </View>
        </GradContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        paddingTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#fff",
        marginVertical: "12%"
    },
    button: {
        width: "100%",
        height: 60,
        backgroundColor: "transparent",
        borderRadius: 4,
        alignItems: "flex-start",
        paddingHorizontal: 28,
        paddingVertical: 20
    },
    buttonTitle: {
        fontSize: 15,
        fontWeight: "300",
        color: "#F2F2F2",
        marginLeft: 20
    },
    deleteButtonTitle: {
        fontSize: 15,
        fontWeight: "300",
        color: "#FF5252",
        marginLeft: 20
    },
    divider: {
        width: "90%",
        height: 1,
        backgroundColor: "transparent",
        marginVertical: 10,
        alignSelf: "center"
    },
    TermsConditions: {
        fontWeight: "500",
        color: "#515151"
    },
    tnc: {
        marginTop: "40%"
    }
})
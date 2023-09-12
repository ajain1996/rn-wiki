import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import MText from '../../components/Text'
import InputBox from '../../components/InputBox'
import { Styles } from '../../styles'
import { Size } from '../../constants'
import Svg from '../../assets/svg'
import ImageButton from '../../components/ImageButton'

export default function ResetPasswordScreen({ navigation }: any) {
    const [email, setEmail] = useState("");

    return (
        <GradContainer>
            <CustomHeader title="Reset Password" />

            <View style={styles.container}>
                <MText style={styles.title}>Reset Password</MText>
                <MText style={styles.subTitle}>
                    Enter the email associated with your account and we’ll send an email with instructions to reset your password.
                </MText>

                <View>
                    <MText style={Styles.label}>Email</MText>
                    <InputBox
                        value={email}
                        keyboardType="email-address"
                        colors={["#101012", "#101012"]}
                        autoCapitalize="none"
                        onChangeText={(val) => {
                            setEmail(val)
                        }}
                        inputContainer={styles.inputStyle}
                        placeholder='Enter your email'
                        placeholderTextColor="#8D8D8D"
                    />
                    <View style={{ position: "absolute", left: 16, bottom: 28 }}>
                        <Svg.EmailIcon />
                    </View>
                </View>

                <ImageButton
                    title="Send Instructions"
                    style={{ marginTop: "8%" }}
                    onPress={() => { navigation?.navigate("CheckYourEmail") }}
                />
            </View>
        </GradContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#fff",
        marginTop: "10%"
    },
    subTitle: {
        fontSize: 16,
        color: "#D8D8D8",
        lineHeight: 19,
        marginTop: 10
    },
    inputStyle: {
        width: Size.wWidth / 1.1,
        borderWidth: 1,
        borderColor: "#222",
        fontWeight: "500",
        fontSize: 14,
        marginTop: 10,
        borderRadius: 8,
        height: 54,
        paddingHorizontal: 44
    },
})
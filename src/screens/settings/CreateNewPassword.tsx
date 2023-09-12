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

export default function CreateNewPassword({ navigation }: any) {
    const [email, setEmail] = useState("");

    return (
        <GradContainer>
            <CustomHeader title="" />

            <View style={styles.container}>
                <MText style={styles.title}>Create new password</MText>
                <MText style={styles.subTitle}>
                    Your new password must be different from previous used passwords
                </MText>

                <View style={{ marginTop: "8%" }}>
                    <MText style={Styles.label}>Password</MText>
                    <InputBox
                        value={email}
                        keyboardType="email-address"
                        colors={["#101012", "#101012"]}
                        autoCapitalize="none"
                        secureTextEntry
                        onChangeText={(val) => {
                            setEmail(val)
                        }}
                        inputContainer={styles.inputStyle}
                        placeholder='............'
                        placeholderTextColor="#8D8D8D"
                    />
                    <MText style={styles.error}>Must be at least 8 characters.</MText>
                </View>

                <View style={{ marginTop: "8%" }}>
                    <MText style={Styles.label}>Confirm Password</MText>
                    <InputBox
                        value={email}
                        keyboardType="email-address"
                        colors={["#101012", "#101012"]}
                        autoCapitalize="none"
                        secureTextEntry
                        onChangeText={(val) => {
                            setEmail(val)
                        }}
                        inputContainer={styles.inputStyle}
                        placeholder='............'
                        placeholderTextColor="#8D8D8D"
                    />
                    <MText style={styles.error}>Both passwords must match.</MText>
                </View>

                <ImageButton
                    title="Reset Password"
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
        paddingHorizontal: 10
    },
    error: {
        fontSize: 14,
        color: "#515151",
        marginTop: -4
    }
})
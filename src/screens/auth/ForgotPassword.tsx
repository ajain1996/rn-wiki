import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradContainer from '../../components/LinearGradContainer'
import MText from '../../components/Text'
import styles from './styles'
import { Colors, Styles } from '../../styles'
import CustomRadioButton from '../../components/CustomRadioButton'
import { SpaceBetweenRow } from '../../components/Wrapper'

export default function ForgotPassword({ navigation }: any) {
    const [selected, setSelected] = useState("email");

    return (
        <LinearGradContainer>
            <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />

            <View style={styles.layout}>
                <MText style={styles.heading}>Forgot Password</MText>
                <MText style={styles.subHeading}>Enter your information below</MText>

                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => {
                        setSelected("email");
                        navigation?.navigate("OTPVerifyScreen")
                    }}
                >
                    <SpaceBetweenRow style={Styles.button}>
                        <MText style={styles.checkText}>Email</MText>
                        <CustomRadioButton
                            selectedVal={selected}
                            title="email"
                            onPress={() => {
                                setSelected("email");
                                navigation?.navigate("OTPVerifyScreen")
                            }}
                        />
                    </SpaceBetweenRow>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => {
                        setSelected("number");
                        navigation?.navigate("OTPVerifyScreen")
                    }}
                >
                    <SpaceBetweenRow style={Styles.button}>
                        <MText style={styles.checkText}>Number</MText>
                        <CustomRadioButton
                            selectedVal={selected}
                            title="number"
                            onPress={() => {
                                setSelected("number")
                                navigation?.navigate("OTPVerifyScreen")
                            }}
                        />
                    </SpaceBetweenRow>
                </TouchableOpacity>
            </View>
        </LinearGradContainer>
    )
}
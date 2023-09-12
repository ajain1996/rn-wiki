import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import LinearGradContainer from '../../components/LinearGradContainer'
import MText from '../../components/Text'
import styles from './styles'
import InputBox from '../../components/InputBox'
import { Colors, Styles } from '../../styles'
import GradientButton from '../../components/GradientButton'

export default function ChangePasswordScreen({ navigation }: any) {
    const [newPassword, setNewPassword] = useState("");
    const [cNewPassword, setCNewPassword] = useState("")

    function handleSubmit() {
        navigation.replace("LoginScreen")
    }

    return (
        <LinearGradContainer>
            <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />

            <View style={{ height: "100%", justifyContent: "space-between" }}>
                <View style={styles.layout}>
                    <MText style={styles.heading}>
                        Enter New password
                    </MText>
                    <MText style={styles.subHeading}>Please enter new Password</MText>
                    <View style={{ marginTop: 20 }}>
                        <MText style={Styles.label}>Enter New password</MText>
                        <InputBox
                            value={newPassword}
                            colors={["#424167", "#16182C"]}
                            onChangeText={(val) => {
                                setNewPassword(val)
                            }}
                            secureTextEntry
                            inputContainer={Styles.inputStyle}
                            placeholder='******'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <View style={{}}>
                        <MText style={Styles.label}>Re-enter password</MText>
                        <InputBox
                            value={cNewPassword}
                            colors={["#424167", "#16182C"]}
                            onChangeText={(val) => {
                                setCNewPassword(val)
                            }}
                            secureTextEntry
                            inputContainer={Styles.inputStyle}
                            placeholder='******'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <GradientButton
                        title="Verify"
                        textStyle={Styles.buttonText}
                        style={Styles.button}
                        colors={["#0B6AF3", "#0B9FF3"]}
                        mode="contained"
                        onPress={handleSubmit}
                    />
                </View>
            </View>
        </LinearGradContainer>
    )
}
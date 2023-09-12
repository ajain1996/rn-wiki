import { StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import MText from '../../components/Text'
import Svg from '../../assets/svg'
import InputBox from '../../components/InputBox'
import { Size } from '../../constants'
import ImageButton from '../../components/ImageButton'
import PhoneInput from '../../components/PhoneInput'
import OptModal from './components/OptModal'


export default function LoginScreen({ navigation }: any) {
    const [name, setName] = useState("");
    const [countryModalVisible, setCountryModalVisible] = useState(false);
    const [countryFlag, setCountryFlag] = useState('🇮🇳');
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState("");
    const [showOTPModal, setShowOTPModal] = useState(false);

    return (
        <GradContainer>
            <StatusBar translucent backgroundColor="transparent" />
            <MText style={styles.heading}>Log in to Wiki</MText>

            <InputBox
                value={name}
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={(val) => {
                    setName(val)
                }}
                label='Name'
                SvgIcon={<Svg.ProfileIcon />}
                colors={["#151018", "#151018"]}
                inputContainer={styles.inputContainer}
                placeholder='Yashasvi Dongre'
                placeholderTextColor="#8D8D8D"
                inputLayoutStyle={styles.inputLayoutStyle}
            />

            <InputBox
                value={name}
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={(val) => {
                    setName(val)
                }}
                label='Email'
                SvgIcon={<Svg.EmailIcon />}
                colors={["#151018", "#151018"]}
                inputContainer={styles.inputContainer}
                placeholder='Enter your email'
                placeholderTextColor="#8D8D8D"
                inputLayoutStyle={styles.inputLayoutStyle}
            />

            <InputBox
                value={name}
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={(val) => {
                    setName(val)
                }}
                label='Name'
                SvgIcon={<Svg.PasswordIcon />}
                colors={["#151018", "#151018"]}
                inputContainer={styles.inputContainer}
                placeholder='*********'
                placeholderTextColor="#8D8D8D"
                inputLayoutStyle={styles.inputLayoutStyle}
            />

            <PhoneInput
                countryModalVisible={countryModalVisible}
                setCountryModalVisible={setCountryModalVisible}
                countryFlag={countryFlag}
                countryCode={countryCode}
                setCountryFlag={setCountryFlag}
                setCountryCode={setCountryCode}
                onChangeText={(val) => { setPhone(val) }}
                value={phone}
                placeHolder=""
                label='Phone'
                inputLayoutStyle={styles.inputLayoutStyle}
            />

            <InputBox
                value={name}
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={(val) => {
                    setName(val)
                }}
                label='Referral Code'
                colors={["#151018", "#151018"]}
                inputContainer={styles.inputContainer}
                placeholder='Have any referral code or link'
                placeholderTextColor="#8D8D8D"
                inputLayoutStyle={styles.inputLayoutStyle}
            />

            <ImageButton
                title="Next"
                style={{ marginTop: 40, marginHorizontal: 20 }}
                onPress={() => { navigation?.navigate("UpdateLoginInfo") }}
            />

            <OptModal
                showOTPModal={showOTPModal}
                setShowOTPModal={setShowOTPModal}
            />
        </GradContainer>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 32,
        fontWeight: "700",
        marginHorizontal: 20,
        marginTop: "20%",
        marginBottom: "8%"
    },
    inputContainer: {
        width: Size.wWidth / 1.1,
        height: 56,
        backgroundColor: "#151018",
        borderRadius: 8,
        alignSelf: "center",
        paddingLeft: 14,
        marginTop: 12
    },
    inputLayoutStyle: {
        marginTop: 14,
    }
})
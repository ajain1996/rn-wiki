import { StyleSheet, StatusBar, View } from 'react-native'
import React, { useState } from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import MText from '../../components/Text'
import Svg from '../../assets/svg'
import InputBox from '../../components/InputBox'
import { Size } from '../../constants'
import ImageButton from '../../components/ImageButton'
import PhoneInput from '../../components/PhoneInput'
import OptModal from './components/OptModal'
import { Styles } from '../../styles'
import { SpaceBetweenRow } from '../../components/Wrapper'


export default function UpdateProfile({ navigation }: any) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [countryFlag, setCountryFlag] = useState('🇮🇳');
    const [countryCode, setCountryCode] = useState('+91');
    const [countryModalVisible, setCountryModalVisible] = useState(false);

    return (
        <GradContainer>
            <StatusBar translucent backgroundColor="transparent" />
            <MText style={styles.heading}>Create Profile</MText>

            <View style={styles.userProfile}>
                <Svg.UserProfileIcon />

                <View style={styles.editBg}>
                    <Svg.EditIcon />
                </View>
            </View>

            <SpaceBetweenRow style={Styles.paddingHorizontalM}>
                <InputBox
                    value={firstName}
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(val) => {
                        setFirstName(val)
                    }}
                    label='First Name'
                    colors={["#151018", "#151018"]}
                    inputContainer={styles.inputContainer2}
                    placeholder='Yashasvi'
                    placeholderTextColor="#8D8D8D"
                    inputLayoutStyle={styles.inputLayoutStyle2}
                />

                <InputBox
                    value={lastName}
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(val) => {
                        setLastName(val)
                    }}
                    label='Last Name'
                    colors={["#151018", "#151018"]}
                    inputContainer={styles.inputContainer2}
                    placeholder='Dongre'
                    placeholderTextColor="#8D8D8D"
                    inputLayoutStyle={styles.inputLayoutStyle2}
                />
            </SpaceBetweenRow>

            <PhoneInput
                countryModalVisible={countryModalVisible}
                setCountryModalVisible={setCountryModalVisible}
                countryFlag={countryFlag}
                countryCode={countryCode}
                setCountryFlag={setCountryFlag}
                setCountryCode={setCountryCode}
                onChangeText={(val) => { setPhone(val) }}
                value={phone}
                placeHolder="Enter your Phone Number"
                label='Phone'
                labelStyle={{ marginBottom: 14 }}
                inputLayoutStyle={styles.inputLayoutStyle}
            />

            <InputBox
                value={location}
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={(val) => {
                    setLocation(val)
                }}
                label='Location'
                colors={["#151018", "#151018"]}
                inputContainer={styles.inputContainer}
                placeholder='Enter Your Location'
                placeholderTextColor="#8D8D8D"
                inputLayoutStyle={styles.inputLayoutStyle}
            />

            <ImageButton
                title="Create"
                style={styles.submitButton}
                onPress={() => { navigation?.navigate("Awesomescreen") }}
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
        marginBottom: "12%",
        alignSelf: "center"
    },
    inputContainer: {
        width: Size.wWidth / 1.1,
        height: 56,
        backgroundColor: "#151018",
        borderRadius: 8,
        alignSelf: "center",
        paddingLeft: 14,
        marginTop: 16
    },
    inputContainer2: {
        width: Size.wWidth / 2.3,
        height: 56,
        backgroundColor: "#151018",
        borderRadius: 8,
        alignSelf: "center",
        paddingLeft: 14,
        marginTop: 12
    },
    inputLayoutStyle: {
        marginTop: 14,
        marginBottom: 12
    },
    inputLayoutStyle2: {
        marginTop: 14,
        width: Size.wWidth / 2.3,
    },
    userProfile: {
        width: 148,
        height: 148,
        borderRadius: 100,
        backgroundColor: "#19103E",
        ...Styles.centered,
        alignSelf: "center",
        borderWidth: 0.6,
        borderColor: "#B8B8B891",
        marginBottom: 40
    },
    editBg: {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: "#FFFFFF",
        ...Styles.centered,
        marginBottom: -12
    },
    submitButton: {
        marginTop: 40,
        marginHorizontal: 20,
        position: "absolute",
        bottom: 28,
    }
})
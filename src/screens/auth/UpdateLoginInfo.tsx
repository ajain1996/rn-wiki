import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import MText from '../../components/Text'
import { Icon, Icons } from '../../components/Icon'
import Svg from '../../assets/svg'
import InputBox from '../../components/InputBox'
import { Countries, Size } from '../../constants'
import { Row } from '../../components/Wrapper'
import ImageButton from '../../components/ImageButton'
import PhoneInput from '../../components/PhoneInput'
import OptModal from './components/OptModal'
import CustomDropdownComponent from '../../components/CustomDropdown'

export const timeZoneList = [
    { label: "Washington, DC, USA (GMT-4)", value: "Washington, DC, USA (GMT-4)" },
    { label: "Washington, DC, USA (GMT-4)", value: "Washington, DC, USA (GMT-4)" },
    { label: "Washington, DC, USA (GMT-4)", value: "Washington, DC, USA (GMT-4)" },
    { label: "Washington, DC, USA (GMT-4)", value: "Washington, DC, USA (GMT-4)" },
    { label: "Washington, DC, USA (GMT-4)", value: "Washington, DC, USA (GMT-4)" },
    { label: "Washington, DC, USA (GMT-4)", value: "Washington, DC, USA (GMT-4)" },
]

export default function UpdateLoginInfo({ navigation }: any) {
    const [country, setCountry] = useState("");
    const [timeZone, setTimeZone] = useState("");
    const [language, setLanguage] = useState("");

    const countryList = Countries.map(item => { return { label: item.name, value: item.name } })

    return (
        <GradContainer>
            <StatusBar translucent backgroundColor="transparent" />
            <MText style={styles.heading}>Select</MText>

            <CustomDropdownComponent
                value={country}
                data={countryList}
                onChange={(value) => {
                    setCountry(value)
                }}
                label="Country"
                placeholder="Select Country"
            />

            <CustomDropdownComponent
                value={timeZone}
                data={timeZoneList}
                onChange={(value) => {
                    setTimeZone(value)
                }}
                label="Time"
                placeholder="Select Time Zone"
                inputLayoutStyle={{ marginTop: 20 }}
            />

            <CustomDropdownComponent
                value={language}
                data={timeZoneList}
                onChange={(value) => {
                    setLanguage(value)
                }}
                label="Language"
                placeholder="********"
                inputLayoutStyle={{ marginTop: 20 }}
            />

            <ImageButton
                title="Next"
                style={styles.button}
                onPress={() => { navigation?.navigate("CreateProfileScreen") }}
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
    },
    button: {
        marginTop: 40,
        marginHorizontal: 20,
        position: "absolute",
        bottom: 34
    }
})
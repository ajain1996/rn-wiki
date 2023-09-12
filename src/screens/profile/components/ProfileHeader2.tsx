import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SpaceBetweenRow } from '../../../components/Wrapper'
import BackButton from '../../../components/iconComponents/BackButton'
import MText from '../../../components/Text'
import CustomDropdownComponent from '../../../components/CustomDropdown'
import { genderList } from '../../../constants'
import { Styles } from '../../../styles'
import Svg from '../../../assets/svg'

interface ProfileHeader2Props {
    title: string;
    navigation: any;
}

export default function ProfileHeader2({ title, navigation }: ProfileHeader2Props) {
    const [dropdown, setDropdown] = useState("");

    return (
        <SpaceBetweenRow style={styles.container}>
            <CustomDropdownComponent
                data={genderList}
                placeholder='My Profile'
                colors={["#000", "#000"]}
                value={dropdown}
                dropdownStyle={styles.dropdownStyle}
                onChange={(val) => {
                    setDropdown(val);
                }}
                placeholderStyle={{ color: "#fff", fontSize: 18, fontWeight: "500" }}
                inputLayoutStyle={{ width: 120 }}
                selectedTextStyle={{ color: "#fff", fontSize: 18, fontWeight: "500" }}
            />

            <TouchableOpacity onPress={() => { navigation?.navigate("SettingsScreen") }}>
                <Svg.SettingsIcon />
            </TouchableOpacity>
        </SpaceBetweenRow>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 16,
        paddingVertical: 28,
        backgroundColor: "#000",
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#fff"
    },
    dropdownStyle: {
        width: 160,
        borderWidth: 0
    }
})
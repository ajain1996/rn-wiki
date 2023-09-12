import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomScroll from '../../components/CustomScroll'
import LinearGradContainer from '../../components/LinearGradContainer'
import ProfileHeader from '../profile/components/ProfileHeader'
import CustomDropdownComponent from '../../components/CustomDropdown'
import { genderList } from '../../constants'
import MText from '../../components/Text'
import InputBox from '../../components/InputBox'
import ImageButton from '../../components/ImageButton'

export default function PauseScreen({ navigation }: any) {
    const [why, setWhy] = useState("");
    const [duration, setDuration] = useState("");
    const [type, setType] = useState("");

    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" />
            <LinearGradContainer style={{ paddingTop: 36, paddingHorizontal: 16 }}>
                <ProfileHeader title="Pause Card" navigation={navigation} />

                <CustomDropdownComponent
                    data={genderList}
                    label="Why?"
                    placeholder='------Select------'
                    colors={["#1C121F", "#1C121F"]}
                    value={why}
                    dropdownStyle={styles.dropdownStyle}
                    onChange={(val) => {
                        setWhy(val);
                    }}
                />
                <MText />

                <CustomDropdownComponent
                    data={genderList}
                    label="Duration?"
                    placeholder='------Select------'
                    colors={["#1C121F", "#1C121F"]}
                    value={duration}
                    dropdownStyle={styles.dropdownStyle}
                    onChange={(val) => {
                        setDuration(val);
                    }}
                />

                <MText style={styles.orText}>Or</MText>

                <MText style={styles.pleaseShare}>
                    Can you please share to us what was not working ?
                </MText>

                <InputBox
                    value={type}
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(val) => {
                        setType(val)
                    }}
                    colors={["#1C121F", "#1C121F"]}
                    inputContainer={styles.inputLayoutStyle}
                    placeholder='Yashasvi Dongre'
                    placeholderTextColor="#8D8D8D"
                    inputLayoutStyle={styles.inputLayoutStyle}
                />

                <ImageButton
                    title="Continue"
                    style={{ marginTop: "20%" }}
                />
            </LinearGradContainer>
        </CustomScroll>
    )
}

const styles = StyleSheet.create({
    dropdownStyle: {
        borderWidth: 0,
        height: 56,
    },
    orText: {
        color: "#BCBCBC",
        alignSelf: "center",
        marginTop: "10%"
    },
    pleaseShare: {
        fontSize: 15,
        color: "#D8D8D8",
        marginTop: "10%",
        width: "85%"
    },
    inputLayoutStyle: {
        height: 140,
        marginTop: 20,
    }
})
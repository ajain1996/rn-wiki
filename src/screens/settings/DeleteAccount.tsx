import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import Svg from '../../assets/svg'
import MText from '../../components/Text'
import { Row } from '../../components/Wrapper'
import images from '../../assets/images'
import InputBox from '../../components/InputBox'
import { Size } from '../../constants'
import ImageButton from '../../components/ImageButton'
import TypePasswordModal from './components/TypePasswordModal'
import SuccessFullModal from './components/SuccessFullModal'

export default function DeleteAccount({ navigation }: any) {
    const [language, setLanguage] = useState("us");
    const [othersText, setOthersText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <GradContainer>
            <CustomHeader title="" />

            <View style={styles.container}>
                <CustomCheck
                    title="Something was broken"
                    checked={language === "us"}
                    onPress={() => { setLanguage('us') }}
                />

                <CustomCheck
                    title="I’m not getting any invites"
                    checked={language === "it"}
                    onPress={() => { setLanguage('it') }}
                />

                <CustomCheck
                    title="I have a privacy concern"
                    checked={language === "fr"}
                    onPress={() => { setLanguage('fr') }}
                />

                <CustomCheck
                    title="Others"
                    checked={language === "ge"}
                    onPress={() => { setLanguage('ge') }}
                />

                {language === "ge" && <View style={{ padding: 20 }}>
                    <MText style={styles.othersText}>
                        Can you please share to us what was not working? We are fixes bugs as soon as we spot them. If something slipped through our fingers, we’d be so grateful to be aware of it & fix it.
                    </MText>

                    <InputBox
                        value={othersText}
                        keyboardType="email-address"
                        colors={["#101012", "#101012"]}
                        autoCapitalize="none"
                        onChangeText={(val) => {
                            setOthersText(val)
                        }}
                        inputContainer={styles.inputStyle}
                        placeholder='Type'
                        placeholderTextColor="#8D8D8D"
                    />
                </View>}

                <ImageButton
                    title="Continue"
                    style={{ marginTop: "8%" }}
                    onPress={() => { setModalVisible(true) }}
                />
            </View>

            <TypePasswordModal
                visible={modalVisible}
                setVisible={setModalVisible}
            />
        </GradContainer>
    )
}

interface CustomCheckProps {
    title: string;
    checked: boolean;
    onPress: () => void;
}

const CustomCheck = ({ title, checked, onPress }: CustomCheckProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Row>
                {checked ? <Image
                    source={images.checkCircle}
                    style={{ width: 25, height: 25 }}
                /> : <View style={styles.checkCircle} />}
                <MText style={styles.buttonTitle}>{title}</MText>
            </Row>
        </TouchableOpacity>
    );
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
        alignItems: "center",
        paddingHorizontal: 28,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
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
    },
    checkCircle: {
        width: 17,
        height: 17,
        borderRadius: 100,
        backgroundColor: "#404040",
        marginRight: 4
    },
    othersText: {
        fontSize: 16,
        fontWeight: "400",
        color: "#D8D8D8",
        lineHeight: 22
    },
    inputStyle: {
        width: Size.wWidth / 1.1,
        borderWidth: 1,
        borderColor: "#222",
        fontWeight: "500",
        fontSize: 14,
        marginTop: "10%",
        borderRadius: 8,
        height: 130,
        paddingHorizontal: 12,
    },
})
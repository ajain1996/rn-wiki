import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import Svg from '../../assets/svg'
import MText from '../../components/Text'
import { Row } from '../../components/Wrapper'
import images from '../../assets/images'

export default function LanguageScreen({ navigation }: any) {
    const [language, setLanguage] = useState("us");

    return (
        <GradContainer>
            <CustomHeader title="Language" />

            <View style={styles.container}>
                <CustomCheck
                    title="US English"
                    checked={language === "us"}
                    onPress={() => { setLanguage('us') }}
                />

                <CustomCheck
                    title="Italian"
                    checked={language === "it"}
                    onPress={() => { setLanguage('it') }}
                />

                <CustomCheck
                    title="French"
                    checked={language === "fr"}
                    onPress={() => { setLanguage('fr') }}
                />

                <CustomCheck
                    title="German"
                    checked={language === "ge"}
                    onPress={() => { setLanguage('ge') }}
                />

                <CustomCheck
                    title="Spanish"
                    checked={language === "sp"}
                    onPress={() => { setLanguage('sp') }}
                />
            </View>
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
                <Svg.UsFlagIcon />
                <MText style={styles.buttonTitle}>{title}</MText>
            </Row>

            {checked ? <Image
                source={images.checkCircle}
                style={{ width: 25, height: 25 }}
            /> : <View style={styles.checkCircle} />}
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
})
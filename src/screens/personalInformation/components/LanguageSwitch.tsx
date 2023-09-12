import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Row } from '../../../components/Wrapper'
import MText from '../../../components/Text'

interface LanguageSwitchProps {
    isDefaultLanguage: boolean;
    setIsdefaultLanguage: Function;
}

export default function LanguageSwitch({ isDefaultLanguage, setIsdefaultLanguage }: LanguageSwitchProps) {
    return (
        <Row>
            <MText style={styles.defaultLanguage}>Enable Language </MText>
            <TouchableOpacity style={[styles.switchBtn, { alignItems: !isDefaultLanguage ? "flex-start" : "flex-end" }]}
                onPress={() => { setIsdefaultLanguage(!isDefaultLanguage) }}
            >
                <View style={styles.switch} />
            </TouchableOpacity>
        </Row>
    )
}

const styles = StyleSheet.create({
    switch: {
        width: 15,
        height: 15,
        borderRadius: 100,
        backgroundColor: "#BD2BC3",
    },
    switchBtn: {
        width: 38,
        height: 18,
        backgroundColor: "#D9D9D9",
        borderRadius: 50,
        justifyContent: "center",
        paddingHorizontal: 2,
        marginTop: 15,
        marginLeft: 15
    },
    defaultLanguage: {
        fontSize: 12,
        fontWeight: "400",
        color: "#B7B7B7",
        marginTop: 14,
    },
})
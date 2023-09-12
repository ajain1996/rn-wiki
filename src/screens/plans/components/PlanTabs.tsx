import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Row } from '../../../components/Wrapper'
import MText from '../../../components/Text'
import { Size } from '../../../constants'
import { Styles } from '../../../styles'

export default function PlanTabs() {
    const [tabs, setTabs] = useState("monthly");

    return (
        <Row style={styles.container}>
            <TouchableOpacity onPress={() => { setTabs('monthly') }}
                style={tabs === "monthly" ? styles.selectedBtn : styles.unSelectedBtn}
            >
                <MText>Monthly</MText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setTabs('yearly') }}
                style={tabs === "yearly" ? styles.selectedBtn : styles.unSelectedBtn}
            >
                <MText>Yearly</MText>
            </TouchableOpacity>
        </Row>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Size.wWidth / 1.8,
        height: 44,
        backgroundColor: "#160D32",
        borderRadius: 50,
        marginTop: "8%"
    },
    unSelectedBtn: {
        width: "50%",
        ...Styles.centered,
        height: 44,
        borderRadius: 50,
    },
    selectedBtn: {
        width: "50%",
        ...Styles.centered,
        backgroundColor: "#131392",
        height: 44,
        borderRadius: 50,
    },
})
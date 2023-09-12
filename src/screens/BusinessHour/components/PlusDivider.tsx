import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SpaceBetweenRow } from '../../../components/Wrapper'
import { Styles } from '../../../styles'
import Svg from '../../../assets/svg'

export default function PlusDivider() {
    return (
        <SpaceBetweenRow style={styles.container}>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.plusBtn}>
                <Svg.PlusIcon />
            </TouchableOpacity>
            <View style={styles.divider} />
        </SpaceBetweenRow>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 0
    },
    divider: {
        width: "40%",
        height: 1,
        backgroundColor: "#303030"
    },
    plusBtn: {
        width: 30,
        height: 30,
        backgroundColor: "#404040",
        borderRadius: 100,
        ...Styles.centered
    }
})
import { StyleSheet } from 'react-native'
import React from 'react'
import { SpaceBetweenRow } from '../../../components/Wrapper'
import BackButton from '../../../components/iconComponents/BackButton'
import MText from '../../../components/Text'
import { Size } from '../../../constants'

interface ProfileHeaderProps {
    title: string;
    navigation: any;
}

export default function ProfileHeader({ title, navigation }: ProfileHeaderProps) {
    return (
        <SpaceBetweenRow style={styles.container}>
            <BackButton onPress={() => { navigation?.goBack() }} />

            <MText style={styles.title}>{title}</MText>

            <MText style={{ width: 50 }} />
        </SpaceBetweenRow>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 10,
        width: Size.wWidth / 1.1,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff"
    }
})
import { View, Text } from 'react-native'
import React from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'

export default function HomeScreen() {
    return (
        <GradContainer>
            <CustomHeader title="Home" />
        </GradContainer>
    )
}
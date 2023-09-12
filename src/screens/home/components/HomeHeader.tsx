import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import images from '../../../assets/images'
import MText from '../../../components/Text'
import { Colors, Styles } from '../../../styles'

export default function HomeHeader() {
    return (
        <SpaceBetweenRow style={styles.container}>
            <Row>
                <Image
                    source={images.location}
                    style={{ marginRight: 8, width: 32, height: 32 }}
                />
                <View>
                    <MText style={styles.user}>Hi, Rahul</MText>
                    <MText style={styles.location}>Indore</MText>
                </View>
            </Row>

            <View style={styles.square}>
                <Image
                    source={images.filter}
                    style={{ tintColor: "#fff" }}
                />
            </View>
        </SpaceBetweenRow>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingVertical: 5,
    },
    user: {
        fontSize: 16,
        fontWeight: "500",
        color: "#fff",
    },
    location: {
        fontSize: 11,
        fontWeight: "500",
        color: "#979797",
    },
    square: {
        width: 52,
        height: 52,
        borderRadius: 9,
        backgroundColor: Colors.blue,
        ...Styles.centered,
    }
})
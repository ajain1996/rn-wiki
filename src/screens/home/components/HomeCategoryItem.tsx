import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Row } from '../../../components/Wrapper';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Styles } from '../../../styles';
import MText from '../../../components/Text';

interface HomeCategoryItemProps {
    item: any;
}

export default function HomeCategoryItem({ item }: HomeCategoryItemProps) {
    return (
        <View style={styles.box}>
            <LinearGradient colors={["#424167", "#424167", "#16182C"]} style={styles.container}>
                <Row>
                    <View style={styles.circle}>
                        <Image
                            source={item?.icon}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                    </View>

                    <MText style={styles.name}>{item?.name}</MText>
                </Row>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 0.4,
        borderColor: "#424161",
        borderRadius: 10,
        marginVertical: 16,
        marginRight: 10,
    },
    container: {
        borderRadius: 10,
        paddingHorizontal: 12,
        padding: 10,
    },
    circle: {
        width: 42,
        height: 42,
        borderRadius: 100,
        backgroundColor: Colors.blue,
        ...Styles.centered,
        marginTop: -2
    },
    icon: {
        width: 22,
        height: 22,
    },
    name: {
        fontSize: 10,
        fontWeight: "600",
        color: "#fff",
        marginLeft: 8,
        marginTop: -2
    }
})
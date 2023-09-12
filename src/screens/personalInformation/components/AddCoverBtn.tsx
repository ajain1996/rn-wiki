import { View, TouchableHighlight, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Row } from '../../../components/Wrapper'
import MText from '../../../components/Text'
import Svg from '../../../assets/svg'
import { Styles } from '../../../styles'
import images from '../../../assets/images'

interface AddCoverProps {
    onPress: () => void;
}

export default function AddCoverBtn({ onPress }: AddCoverProps) {
    return (
        <>
            <ImageBackground resizeMode='stretch'
                source={images.cover_bg}
                style={styles.coverContainer}
            >
                <TouchableHighlight style={styles.edit} onPress={onPress}>
                    <Row>
                        <MText style={styles.buttonTitle}>Add Cover</MText>
                        <View style={styles.editBg}>
                            <Svg.EditIcon />
                        </View>
                    </Row>
                </TouchableHighlight>
                {/* <AddCoverBtn onPress={() => { }} /> */}
            </ImageBackground>
            <View style={styles.userProfile}>
                <Svg.UserProfileIcon />

                <View style={styles.editBg}>
                    <Svg.EditIcon />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttonTitle: {
        fontSize: 14,
        fontWeight: "400",
        color: "#B2B2B2",
        marginRight: 16
    },
    edit: {
        paddingHorizontal: 8,
        alignSelf: "flex-end",
        marginTop: 5,
        paddingVertical: 8,
        marginRight: 5
    },
    editBg: {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: "#FFFFFF",
        ...Styles.centered,
    },
    coverContainer: {
        width: "100%",
        height: 150,
        backgroundColor: "#262626"
    },
    userProfile: {
        width: 148,
        height: 148,
        borderRadius: 100,
        backgroundColor: "#19103E",
        ...Styles.centered,
        alignSelf: "center",
        marginTop: -100,
        borderWidth: 0.6,
        borderColor: "#B8B8B891",
        marginBottom: 40
    },
})
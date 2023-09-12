import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import { Row, SpaceBetweenRow } from '../../components/Wrapper'
import MText from '../../components/Text'
import Svg from '../../assets/svg'
import { Colors } from '../../styles'
import ImageButton from '../../components/ImageButton'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/reducer/user'

export default function Awesomescreen({ navigation }: any) {
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(setUser({}));
        // navigation?.navigate("Root")
    }

    return (
        <GradContainer>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={styles.layout}>
                <SpaceBetweenRow>
                    <Row>
                        <MText style={styles.heading}>Awesome</MText>
                        <Svg.HappyFaceIcon />
                    </Row>
                    <TouchableOpacity onPress={() => { }}>
                        <MText style={styles.resendButton}>Skip</MText>
                    </TouchableOpacity>
                </SpaceBetweenRow>

                <MText style={styles.subText}>
                    You are few steps away to complete your profile
                </MText>
            </View>

            <ImageButton
                title="Next"
                style={styles.button}
                onPress={handleSubmit}
            />
        </GradContainer>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        fontWeight: "700",
        marginTop: "10%",
        marginBottom: "12%",
        alignSelf: "center",
        marginRight: 20
    },
    resendButton: {
        color: Colors.white,
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    layout: {
        paddingHorizontal: 20
    },
    subText: {
        color: Colors.white,
    },
    button: {
        marginTop: 40,
        marginHorizontal: 20,
        position: "absolute",
        bottom: 34
    }
});
import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import MText from '../../../components/Text';
import { Size } from '../../../constants';
import SimpleModal from '../../../components/SimpleModal';
import ImageButton from '../../../components/ImageButton';
import images from '../../../assets/images';

interface SuccessFullModalProps {
    visible: boolean;
    setVisible: Function;
}

export default function SuccessFullModal({ visible, setVisible }: SuccessFullModalProps) {
    return (
        <View>
            <SimpleModal
                visible={visible}
                setVisible={setVisible}
                closeOnSubmit
                dismiss
                style={{ backgroundColor: "#0F0F0F", borderRadius: 16 }}
                modalContainer={styles.modalContainer}
                children={
                    <View style={{ paddingVertical: 20 }}>
                        <Image
                            source={images.modalSuccess}
                            style={{ width: 130, height: 130, alignSelf: "center" }}
                        />
                        <MText style={styles.TypeYourPassword}>
                            Your Request has been sent successfully, your card has been paused with in 24hrs.
                        </MText>

                        <ImageButton
                            title="OK"
                            style={{ marginTop: "8%", width: Size.wWidth / 1.3, }}
                            onPress={() => { setVisible(false) }}
                        />
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: "center",
        width: "92%", alignSelf: "center",
    },
    TypeYourPassword: {
        marginBottom: 8,
        textAlign: "center",
        marginTop: "6%"
    }
})
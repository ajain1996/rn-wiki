import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppModal from '../../../components/AppModal'
import MText from '../../../components/Text';
import InputBox from '../../../components/InputBox';
import { Size } from '../../../constants';
import SimpleModal from '../../../components/SimpleModal';
import ImageButton from '../../../components/ImageButton';
import SuccessFullModal from './SuccessFullModal';

interface TypePasswordModalProps {
    visible: boolean;
    setVisible: Function;
}

export default function TypePasswordModal({ visible, setVisible }: TypePasswordModalProps) {
    const [password, setPassword] = useState("");
    const [successModal, setSuccessModal] = useState(false);

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
                        <MText style={styles.TypeYourPassword}>Type Your Password</MText>
                        <InputBox
                            value={password}
                            keyboardType="email-address"
                            colors={["#101012", "#101012"]}
                            autoCapitalize="none"
                            onChangeText={(val) => {
                                setPassword(val)
                            }}
                            inputContainer={styles.inputStyle}
                            placeholder='............'
                            placeholderTextColor="#8D8D8D"
                        />

                        <ImageButton
                            title="Continue"
                            style={{ marginTop: "8%", width: Size.wWidth / 1.3, }}
                            onPress={() => { setVisible(false); setSuccessModal(true); }}
                        />
                    </View>
                }
            />

            <SuccessFullModal
                visible={successModal}
                setVisible={setSuccessModal}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: "center",
        width: "92%", alignSelf: "center",
    },
    inputStyle: {
        width: Size.wWidth / 1.3,
        borderWidth: 1,
        borderColor: "#222",
        fontWeight: "500",
        fontSize: 14,
        marginTop: 10,
        borderRadius: 8,
        height: 54,
        paddingHorizontal: 12,
        alignSelf: "center"
    },
    TypeYourPassword: {
        marginLeft: -10,
        marginBottom: 8
    }
})
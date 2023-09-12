import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SimpleModal from '../../../components/SimpleModal'
import { Colors } from '../../../styles';
import MText from '../../../components/Text';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { Size } from '../../../constants';
import ImageButton from '../../../components/ImageButton';

interface OptModalProps {
    showOTPModal: boolean
    setShowOTPModal: Function;
    navigation?: any;
    countryFlag?: string;
    countryCode?: string;
    mobile?: string;
}

const cellCount = 4;
const RESEND_OTP_TIME_LIMIT = 30;
let resendOtpTimerInterval: any;

export default function OptModal({
    showOTPModal,
    setShowOTPModal,
    navigation,
    countryFlag,
    countryCode,
    mobile
}: OptModalProps) {

    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(RESEND_OTP_TIME_LIMIT);
    const ref = useBlurOnFulfill({ value, cellCount: cellCount });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        startResendOtpTimer();
        return () => {
            if (resendOtpTimerInterval) {
                clearInterval(resendOtpTimerInterval);
            }
        };
    }, [resendButtonDisabledTime]);

    const startResendOtpTimer = () => {
        if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
        }
        resendOtpTimerInterval = setInterval(() => {
            if (resendButtonDisabledTime <= 0) {
                clearInterval(resendOtpTimerInterval);
            } else {
                setResendButtonDisabledTime(resendButtonDisabledTime - 1);
            }
        }, 1000);
    };

    const resendOtp = async () => {
        setValue('')
        setLoading(true);
        setError('')
        setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
        startResendOtpTimer();
        setLoading(false);
    };


    const verifyOtp = async () => {
        setLoading(true);
        if (value.length === 6) {
        }
        setLoading(false);
    }

    return (
        <SimpleModal
            visible={showOTPModal}
            setVisible={() => setShowOTPModal(false)}
            dismiss
            closeOnSubmit={true}
            style={styles.modalContainer}
        >
            <View>
                <MText style={styles.title}>OTP Verification</MText>
                <MText style={styles.info}>Enter the OTP which we have sent to your Mail</MText>

                <View style={styles.codeFieldWrapper} >
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={(text) => setValue(text)}
                        cellCount={cellCount}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </View>

                <View style={styles.resendWrapper}>
                    {resendButtonDisabledTime !== 0 && <MText style={styles.subtitleText}>Resend Code? ({resendButtonDisabledTime} Sec) </MText>}
                    {resendButtonDisabledTime <= 0 &&
                        <TouchableOpacity onPress={() => resendOtp()}>
                            <MText style={styles.resendButton}>Resend Otp</MText>
                        </TouchableOpacity>}
                </View>
            </View>
            <ImageButton
                title="Submit"
                style={{ marginVertical: 16, marginHorizontal: 20, alignSelf: "center" }}
                onPress={() => { }}
            />
        </SimpleModal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: Colors.primary,
        paddingTop: 28
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
    },
    info: {
        fontSize: 14,
        fontWeight: "400",
        marginTop: 8
    },
    codeFieldWrapper: {
        marginVertical: Size.s,
        marginTop: 40
    },
    cell: {
        width: 74,
        height: 46,
        lineHeight: Size.vl,
        fontSize: 20,
        borderRadius: Size.s,
        borderColor: "#B8B8B847",
        borderWidth: Size._vvs,
        textAlign: 'center',
        marginHorizontal: Size.vs,
        backgroundColor: "#26262666"
    },
    focusCell: {
        borderColor: Colors.gray9,
    },
    resendWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    resendButton: {
        color: "#fff",
    },
    subtitleText: {
        color: "#fff"
    },
})
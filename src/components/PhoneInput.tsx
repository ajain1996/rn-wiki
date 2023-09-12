import { View, Text, TextInput, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { Row } from './Wrapper'
import { TouchableOpacity } from 'react-native'
import MText from './Text'
import { Icon, Icons } from './Icon'
import { Size } from '../constants'
import { Colors, Styles } from '../styles'
import typography from '../styles/typography'
import { CountryModal } from './modal'
import { w } from '../utils'

interface PhoneInputProps {
    countryModalVisible: boolean;
    setCountryModalVisible: Function;
    countryFlag: string;
    countryCode: string;
    setCountryFlag: Function;
    setCountryCode: Function;
    onChangeText?: (text: string) => void;
    value: string;
    placeHolder: string;
    labelStyle?: TextStyle,
    label?: string;
    inputLayoutStyle?: ViewStyle;
}

export default function PhoneInput({
    countryModalVisible,
    setCountryModalVisible,
    countryFlag,
    countryCode,
    setCountryFlag,
    setCountryCode,
    onChangeText,
    value,
    placeHolder,
    labelStyle,
    label,
    inputLayoutStyle
}: PhoneInputProps) {
    return (
        <View style={{ width: Size.wWidth / 1.1, alignSelf: "center", ...inputLayoutStyle }}>
            <MText style={{ ...styles.label, ...labelStyle }}>{label}</MText>
            {!countryModalVisible ? <Row style={styles.mobileWrapper}>
                <TouchableOpacity style={styles.countryFlagCodeWrapper}
                    onPress={() => { setCountryModalVisible(true) }}>
                    <MText style={[styles.countryIcon, { fontSize: Size.ml }]}>{countryFlag}</MText>
                    <MText style={styles.countryIcon}>{countryCode}</MText>
                    <Icon
                        type={Icons.Entypo}
                        name="chevron-thin-down"
                        style={Styles.aliSelfCenter}
                        size={12} color="#CCC"
                    />
                </TouchableOpacity>
                <TextInput
                    returnKeyType={'done'}
                    selectionColor={Colors.gray9}
                    placeholder={placeHolder}
                    placeholderTextColor={Colors.gray6}
                    style={styles.inputField}
                    autoCapitalize="none"
                    blurOnSubmit={true}
                    autoCorrect={false}
                    keyboardType='number-pad'
                    secureTextEntry={false}
                    onChangeText={onChangeText}
                    value={value}
                    maxLength={15}
                />
            </Row> : <CountryModal
                setCountryFlag={setCountryFlag}
                setCountryCode={setCountryCode}
                countryModalVisible={countryModalVisible}
                setCountryModalVisible={setCountryModalVisible}
            />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Size.ml,
    },
    mobileWrapper: {
        height: 54,
        width: Size.wWidth / 1.1,
        paddingHorizontal: Size.s,
        backgroundColor: "#151018",
        borderColor: "#151018",
        borderWidth: Size._vvs,
        borderRadius: 6,
        alignSelf: "center"
    },
    countryFlagCodeWrapper: { flexDirection: 'row' },
    countryIcon: {
        ...Styles.aliSelfCenter,
        fontSize: Size.m - 2,
        color: "#FFF",
        marginRight: Size.vs,
        marginLeft: 8
    },
    inputField: {
        paddingLeft: Size.s,
        fontSize: Size.m - 2,
    },
    label: {
        fontSize: Size.s14,
        color: "#fff",
        fontWeight: "400",
        marginBottom: -4
    }
})
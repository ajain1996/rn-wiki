import React, { useEffect, useRef } from 'react'

import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { Size } from '../constants';
import { Colors, Styles } from '../styles';
import { w } from '../utils';
import LinearGradient from 'react-native-linear-gradient';
import MText from './Text';

interface InputListProp {
    label: string,
    value: string,
}

interface DropdownProp {
    value?: string | undefined;
    onChange?: (text: string) => void;
    placeholder?: string;
    data?: Array<InputListProp>;
    dropdownStyle?: ViewStyle | TextStyle;
    error?: string;
    colors?: any;
    label?: string;
    labelStyle?: TextStyle;
    inputLayoutStyle?: ViewStyle;
    placeholderStyle?: TextStyle;
    selectedTextStyle?: TextStyle;
}

export default function CustomDropdownComponent({
    value,
    placeholder,
    data,
    onChange,
    dropdownStyle,
    error,
    colors,
    label,
    labelStyle,
    inputLayoutStyle,
    placeholderStyle,
    selectedTextStyle
}: DropdownProp) {
    const [isFocus, setIsFocus] = React.useState(false);
    const [dropdownData, setDropdownData] = React.useState("");

    const renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <View style={{ width: Size.wWidth / 1.1, alignSelf: "center", ...inputLayoutStyle }}>
            {label && <MText style={{ ...styles.label, ...labelStyle }}>{label}</MText>}
            <LinearGradient colors={colors ? colors : ["#121117", "#121013"]}
                style={[styles.dropdown, dropdownStyle]}
            >
                <Dropdown
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={value?.length > 0 ? value?.toLowerCase() : placeholder}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setDropdownData(item.value);
                        setIsFocus(false);
                        onChange(item.value.toString())
                    }}
                    renderItem={renderItem}
                    placeholderStyle={[styles.placeholderStyle, { color: value?.length > 0 ? "#fff" : Colors.subText, ...placeholderStyle }]}
                    selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
                    dropdownPosition="top"
                    containerStyle={{ borderRadius: 10, width: Size.wWidth / 1.16 }}
                />

                {error && <Text style={styles.errorMsg}>{error} !</Text>}
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        fontSize: Size.s12,
        color: Colors.red,
        marginTop: 1,
        marginLeft: -8
    },
    dropdown: {
        height: w(12),
        width: Size.wWidth / 1.1,
        paddingHorizontal: Size.s,
        borderWidth: 1,
        borderColor: "#B8B8B827",
        borderRadius: 6,
        color: Colors.subText,
        paddingLeft: 22,
        alignSelf: "center",
        justifyContent: "center"
    },
    icon: {
        marginRight: Size.vs,
        width: Size.ml
    },
    placeholderStyle: {
        fontSize: Size.s12,
        color: Colors.subText,
    },
    selectedTextStyle: {
        fontSize: Size.s12,
        color: Colors.white,
    },
    iconStyle: {
        width: Size.xl,
        height: Size.xl,
    },
    inputSearchStyle: {
        height: Size.vl,
        fontSize: w(3.4),
    },
    item: {
        padding: Size.m,
        ...Styles.row_space
    },
    textItem: {
        fontSize: w(3.4),
        color: Colors.black,
        height: Size.l
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff",
        marginTop: 14,
        marginBottom: 10
    },
})
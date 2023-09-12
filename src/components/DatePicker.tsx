import React, { useState } from "react";

import { useTheme } from "@react-navigation/native";
import moment from 'moment';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

import { Icon, Icons } from "./Icon";
import MText from "./Text";
import { Size } from "../constants";
import { w } from "../utils";
import { Colors, Styles } from "../styles";
import LinearGradient from "react-native-linear-gradient";


export default function DatePicker(props: any) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [initialDate, setInitialDate] = useState(props?.value?.length === 0 ? "" : moment(props?.value)?.format("DD MMMM YYYY"))

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        if (props.mode === "time") {
            setInitialDate(moment(date).format("HH:SS"))
            props.onDateSelected(moment(date).format("HH:SS"));
        } else {
            setInitialDate(moment(date).format("DD MMMM YYYY"))
            props.onDateSelected(moment(date).format("DD MMMM YYYY"));
        }
        hideDatePicker();
    };

    const theme = useTheme();

    return (
        <View>
            <MText style={styles.label}>{props?.label}</MText>
            <LinearGradient
                style={[styles.container, props?.containerStyle]}
                colors={props.colors ? props.colors : ["#26262666", "#26262666"]}
            >
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={showDatePicker}
                    style={styles.inputContainer}
                >
                    <MText style={initialDate != ''
                        ? props.clear ? styles.input : styles.inputBlack
                        : styles.input}
                    >
                        {initialDate ? initialDate : props.placeholderText}
                    </MText>
                    {props.mode === "date"
                        ? props?.icon ? props?.icon : <Icon type={Icons.Feather} name='calendar' color={theme.colors.primary} />
                        : props?.icon ? props?.icon : <Icon type={Icons.Ionicons} name='time-outline' color={theme.colors.primary} />}
                </TouchableOpacity>
                {/* {props?.error !== 0 && <MText style={styles.errorMsg}>{props.error} !</MText>} */}
                <DateTimePicker
                    isVisible={isDatePickerVisible}
                    mode={props.mode}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    minimumDate={props?.minimumDate ? props.minimumDate : null}
                    maximumDate={props?.maximumDate ? props.maximumDate : null}
                // maximumDate={moment().subtract(18, "years").toDate()}
                />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    containerBig: {
        fontSize: Size.s14,
    },
    inputContainer: {
        width: '100%',
        borderWidth: 0,
        height: w(12),
        borderColor: Colors.gray3,
        paddingHorizontal: Size.s,
        borderRadius: Size.s12,
        ...Styles.row_space,
    },
    input: {
        color: Colors.subText,
        fontSize: 12
    },
    inputBlack: {
        color: Colors.white,
        fontSize: 12
    },
    errorMsg: {
        fontSize: Size.s14,
        color: Colors.red,
        marginTop: 1
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff",
        marginTop: 14,
    },
});
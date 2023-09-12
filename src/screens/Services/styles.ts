import { StyleSheet } from "react-native";
import { Styles } from "../../styles";

export default StyleSheet.create({
    container: {
        width: "100%",
        padding: 20,
        paddingTop: "14%",
        paddingLeft: 50,
    },
    iconsBg: {
        width: 36,
        height: 36,
        borderRadius: 100,
        backgroundColor: "#fff",
        ...Styles.centered,
        marginRight: 24,
        marginLeft: 24,
    },
    label: {
        fontSize: 16,
        color: "#B7B7B7",
        width: 76,
    },
    valueText: {
        fontSize: 14,
        color: "#B7B7B7",
    },
    iconText: {
        fontSize: 13,
        color: "#B7B7B7",
        marginTop: 10
    },
    editLayout: {
        marginTop: 32,
        width: "60%",
        alignSelf: "center",
        paddingLeft: "5%"
    },
    changeButton: {
        width: "25%",
        height: 36,
        backgroundColor: "transparent",
        paddingVertical: 0
    },
    editDeleteBtn: {
        ...Styles.centered,
        borderWidth: 1,
        borderColor: "#52525247",
        width: 60,
        height: 60,
        marginHorizontal: 8
    }
})
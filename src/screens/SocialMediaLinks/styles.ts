import { StyleSheet } from "react-native";
import { Styles } from "../../styles";
import { Size } from "../../constants";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        marginVertical: 6
    },
    titleText: {
        fontSize: 14,
        color: "#B7B7B7",
    },
    leftText: {
        fontSize: 14,
        color: "#B7B7B7",
        width: "20%"
    },
    valueText: {
        fontSize: 13,
        color: "#FFFFFF",
    },
    grid: {
        width: Size.wWidth / 2.5,
        height: 98,
        borderRadius: 8,
        backgroundColor: "#26262666",
        ...Styles.centered,
        marginTop: 10
    },
    grid2: {
        width: Size.wWidth / 1.55,
        height: 46,
        borderRadius: 8,
        backgroundColor: "#26262666",
        justifyContent: "center",
        paddingHorizontal: 16,
        marginLeft: 20
    },
    editBtn: {
        width: Size.wWidth / 2.4,
        height: 54,
        backgroundColor: "#26262666"
    },
    buttonTitle: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "500"
    },
    saveBtn: {
        marginHorizontal: 20,
        width: Size.wWidth / 2.4,
        borderRadius: 8,
    },
    inputContainer: { width: "74%", paddingLeft: 8, marginLeft: 20, borderRadius: 4, marginTop: -6 },
})
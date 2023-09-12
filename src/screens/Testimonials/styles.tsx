import { StyleSheet } from "react-native";
import { Styles } from "../../styles";
import { Size } from "../../constants";

export default StyleSheet.create({
    container: {
        padding: 20,
        marginTop: "8%"
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
        width: Size.wWidth / 1.5,
        height: 46,
        borderRadius: 8,
        backgroundColor: "#26262666",
        justifyContent: "center",
        marginTop: 10,
        paddingHorizontal: 16,
        marginLeft: 20
    },
    editLayout: {
        marginTop: 32,
        width: "50%",
        alignSelf: "center",
    },
    inputContainer: { width: "74%", paddingLeft: 8, marginLeft: 20, borderRadius: 4 },
    editDeleteBtn: {
        ...Styles.centered,
        borderWidth: 1,
        borderColor: "#52525247",
        width: 60,
        height: 60,
        marginHorizontal: 20
    }
})
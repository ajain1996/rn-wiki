import { StyleSheet } from "react-native";
import { Size } from "../../constants";
import { Colors, Styles } from "../../styles";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        height: "100%"
    },
    heading: {
        fontSize: 24,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 4
    },
    subHeading: {
        fontSize: 14,
        fontWeight: "400",
        color: Colors.subText,
        marginBottom: 50
    },
    checkText: {
        fontSize: 14,
        fontWeight: "400",
        color: Colors.subText,
    },
    layout: {
        marginTop: "20%",
        alignItems: "center",
    },
})
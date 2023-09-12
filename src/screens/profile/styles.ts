import { StyleSheet } from "react-native";
import { Colors } from "../../styles";
import { Size } from "../../constants";

export default StyleSheet.create({
    userImage: {
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Colors.blue,
    },
    userFullName: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        marginTop: 16
    },
    userName: {
        fontSize: 11,
        fontWeight: "400",
        color: "#979797",
        marginTop: 4
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#D8D8D833",
        marginTop: 30,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff",
    },
    button: {
        width: Size.wWidth / 1.1,
        alignSelf: "center",
        marginTop: 30
    },
})
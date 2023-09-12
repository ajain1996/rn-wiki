import { View, StyleSheet } from 'react-native'
import React from 'react'
import { GradContainer } from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import MyButton from '../../components/MyButton'
import svg from '../../assets/svg'
import Svg from '../../assets/svg'

export default function MyCardScreen({ navigation }: any) {
    return (
        <GradContainer>
            <CustomHeader title="My card" />

            <View style={styles.container}>
                <MyButton
                    title="Personal Information"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.PerdonalInformationIcon />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("PersonalInformation") }}
                />

                <View style={styles.divider} />

                <MyButton
                    title="Card Template"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.CardTemplateIcon />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("CardTemplatesScreen") }}
                />

                <View style={styles.divider} />

                <MyButton
                    title="Business hours"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.BusinessHoursIcon />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("BusinessHourScreen") }}
                />

                <View style={styles.divider} />

                <MyButton
                    title="Services"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.ServicesIcon />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("ServicesScreen") }}
                />

                <View style={styles.divider} />

                <MyButton
                    title="Testimonials"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.TestimonialsIcon />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("TestimonialsScreen") }}
                />

                <View style={styles.divider} />

                <MyButton
                    title="Appoinments"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.AppoinmentsIcon />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("AppointmentsScreen") }}
                />

                <View style={styles.divider} />

                <MyButton
                    title="Social Media Links"
                    style={styles.button}
                    textStyle={styles.buttonTitle}
                    SvgIcon={<Svg.SocialMediaLinksIcon />}
                    underlayColor="#262626"
                    onPress={() => { navigation.navigate("SocialMediaLinks") }}
                />

                <View style={styles.divider} />
            </View>
        </GradContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        paddingTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#fff",
        marginVertical: "12%"
    },
    button: {
        width: "100%",
        height: 60,
        backgroundColor: "transparent",
        borderRadius: 4,
        alignItems: "flex-start",
        paddingHorizontal: 28,
        paddingVertical: 20
    },
    buttonTitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#F2F2F2",
        marginLeft: 20
    },
    divider: {
        width: "90%",
        height: 1,
        backgroundColor: "#0F0F0F",
        marginVertical: 12,
        alignSelf: "center"
    }
})
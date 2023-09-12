import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MText from '../../components/Text'
import InputBox from '../../components/InputBox'
import { Size } from '../../constants';
import Button from '../../components/MyButton';
import Row from '../../components/Row';
import { Colors, Styles } from '../../styles';
import Toast from 'react-native-simple-toast';
import Auth from '../../constants/Auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducer/user';
import CustomLoader, { CustomPanel } from '../../components/CustomLoader';
import GradientButton from '../../components/GradientButton';
import { SpaceBetweenRow } from '../../components/Wrapper';
import CustomDropdownComponent from '../../components/CustomDropdown';
import DatePicker from '../../components/DatePicker';
import { RadioButtonUi } from '../../components/IcUi';
import { handleRegisterApiRoute } from '../../API/api';
import { setToken } from '../../redux/reducer/token';
import moment from 'moment';
import { setUserType } from '../../redux/reducer/userType';

export const genderList = [
    { label: "Male", value: "male" },
    { label: "FeMale", value: "female" },
    { label: "Others", value: "others" },
]

export default function RegisterScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDOB] = useState("");
    const [owner, setOwner] = useState("drone")
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        if (!email && !name && !phone && !address && !gender && !dob && !name) {
            Toast.show("Please enter all fields")
            return;
        }

        setLoading(true);
        console.log("\n\n handleRegisterApiRoute called");
        handleRegisterApiRoute(
            name,
            email,
            "Ankit@1234",
            phone,
            address,
            gender,
            dob,
            async (result: any) => {
                console.log("\n\n handleRegisterApiRoute Success: ", result);
                setLoading(false);
                if (result?.data?.user) {
                    Toast.show('User Register Successfully!');

                    await Auth.setLocalStorageData(
                        'token', result?.data?.token
                    ).then(() => {
                        dispatch(setToken(result?.data?.token));
                        dispatch(setUserType(owner));
                    }).catch((e) => {
                        Toast.show("Oops! Something went wrong")
                    })

                    await Auth.setLocalStorageData(
                        'account', result?.data?.user
                    ).then(() => {
                        dispatch(setUser(result?.data?.user));
                        navigation.navigate('Root');
                    }).catch((e) => {
                        Toast.show("Oops! Something went wrong")
                    })
                } else if (result?.statusCode === 400) {
                    Toast.show(result?.message)
                }
            })
    }

    return (
        <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
                <View style={{ paddingHorizontal: 20 }}>
                    <MText style={styles.heading}>Let’s Create your Account</MText>
                    <MText style={styles.subHeading}>Enter your information below</MText>
                </View>
                <View style={Styles.alignCenter}>
                    <View>
                        <MText style={Styles.label}>Name</MText>
                        <InputBox
                            value={name}
                            keyboardType="default"
                            colors={["#424167", "#16182C"]}
                            autoCapitalize="none"
                            onChangeText={(val) => {
                                setName(val)
                            }}
                            inputContainer={Styles.inputStyle}
                            placeholder='Rahul'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <View>
                        <MText style={Styles.label}>Email</MText>
                        <InputBox
                            value={email}
                            keyboardType="email-address"
                            colors={["#424167", "#16182C"]}
                            autoCapitalize="none"
                            onChangeText={(val) => {
                                setEmail(val)
                            }}
                            inputContainer={Styles.inputStyle}
                            placeholder='you@example.com'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <View>
                        <MText style={Styles.label}>Number</MText>
                        <InputBox
                            value={phone}
                            keyboardType="decimal-pad"
                            colors={["#424167", "#16182C"]}
                            onChangeText={(val) => {
                                setPhone(val)
                            }}
                            inputContainer={Styles.inputStyle}
                            placeholder='9999000000'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <View>
                        <MText style={Styles.label}>Address</MText>
                        <InputBox
                            value={address}
                            colors={["#424167", "#16182C"]}
                            onChangeText={(val) => {
                                setAddress(val)
                            }}
                            inputContainer={Styles.inputStyle}
                            placeholder='150 Local Street'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <SpaceBetweenRow>
                        <CustomDropdownComponent
                            data={genderList}
                            label="Gender"
                            placeholder='Gender'
                            colors={["#424167", "#16182C"]}
                            value={gender}
                            dropdownStyle={Styles.dropdownStyle}
                            onChange={(val) => {
                                setGender(val);
                            }}
                        />

                        <DatePicker
                            placeholderText="DOB"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            colors={["#424167", "#16182C"]}
                            value={""}
                            containerStyle={Styles.datePickerContainer}
                            label="Date of birth"
                            onDateSelected={(val: string) => {
                                setDOB(val);
                            }}
                        />
                    </SpaceBetweenRow>
                </View>

                <View style={{ padding: 20, marginTop: 10 }}>
                    <MText style={styles.alreadyAUser}>Are you a drone Owner </MText>

                    <Row style={{ marginTop: 8, marginLeft: -8, marginBottom: 20 }}>
                        <RadioButtonUi
                            value={owner}
                            setValue={setOwner}
                            text="Drone Owner"
                            color={Colors.blue}
                            textStyle={{ fontSize: 12, color: "#fff" }}
                        />
                        <View style={{ width: 20 }} />

                        <RadioButtonUi
                            value={owner}
                            setValue={setOwner}
                            text="User"
                            color={Colors.blue}
                            textStyle={{ fontSize: 12, color: "#fff" }}
                        />
                    </Row>
                    <GradientButton
                        title="Create Account"
                        textStyle={Styles.buttonText}
                        style={Styles.button}
                        colors={["#0B6AF3", "#0B9FF3"]}
                        mode="contained"
                        onPress={handleLogin}
                    />
                </View>

                <Row style={{ justifyContent: "center", paddingBottom: 20 }}>
                    <MText style={styles.alreadyAUser}>Already a user! please </MText>
                    <Button
                        title="Login"
                        textStyle={styles.alreadyLogin}
                        background='transparent'
                        style={{ height: 20, marginLeft: 4, marginTop: 2 }}
                        onPress={() => { navigation.navigate("LoginScreen") }}
                    />
                    {/* <MText style={styles.alreadyLogin}>Login</MText> */}
                </Row>
                <CustomPanel loading={loading} />
                <CustomLoader loading={loading} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#16182C",
        paddingTop: 60,
    },
    arch: {
        height: 220,
        width: Size.wWidth,
        position: "absolute",
        top: 0
    },
    layout: {
        elevation: 0,
        shadowColor: "#999",
        // backgroundColor: "#fff",
        // padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "600",
        color: "#fff",
        // textAlign: "center",
        marginBottom: 4
    },
    subHeading: {
        fontSize: 14,
        fontWeight: "400",
        color: "#fff",
        // textAlign: "center",
        marginBottom: 50
    },
    buttons: {
        height: 50,
        width: Size.wWidth,
        position: "absolute",
        bottom: -20
    },
    alreadyAUser: {
        fontSize: 12,
        fontWeight: "500",
        color: "#fff",
    },
    alreadyLogin: {
        fontSize: 12,
        fontWeight: "500",
        color: Colors.blue,
    }
})
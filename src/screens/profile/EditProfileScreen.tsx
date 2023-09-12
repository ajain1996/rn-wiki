import { View, Text, Image, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import LinearGradContainer from '../../components/LinearGradContainer'
import ProfileHeader from './components/ProfileHeader'
import images from '../../assets/images'
import styles from './styles'
import MText from '../../components/Text'
import { getUserProfileAPI, updateUserProfileAPI } from '../../API/api'
import CustomLoader, { CustomPanel } from '../../components/CustomLoader'
import { Styles } from '../../styles'
import InputBox from '../../components/InputBox'
import { SpaceBetweenRow } from '../../components/Wrapper'
import CustomDropdownComponent from '../../components/CustomDropdown'
import { genderList } from '../../constants'
import DatePicker from '../../components/DatePicker'
import GradientButton from '../../components/GradientButton'
import Toast from 'react-native-simple-toast';
import Auth from '../../constants/Auth'
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/reducer/token'
import { setUser } from '../../redux/reducer/user'

export default function EditProfileScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const [profileData, setProfileData] = useState({});

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDOB] = useState("");

    const [loading, setLoading] = useState(true);

    const userProfileCallback = useCallback((result: any) => {
        if (result !== null && result?.data) {
            setLoading(false);
            setProfileData(result?.data);
            setName(result?.data?.name);
            setEmail(result?.data?.email);
            setPhone(result?.data?.phoneNumber);
            setAddress(result?.data?.address);
            setGender(result?.data?.gender);
            setDOB(result?.data?.dob);
        }
    }, [profileData])

    useEffect(() => {
        getUserProfileAPI(userProfileCallback)
    }, [])

    const handleLogin = () => {
        if (!email && !name && !phone && !address && !gender && !dob && !name) {
            Toast.show("Please enter all fields")
            return;
        }

        setLoading(true);
        console.log("\n\n handleRegisterApiRoute called");
        updateUserProfileAPI(
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

                    // await Auth.setLocalStorageData(
                    //     'token', result?.data?.token
                    // ).then(() => {
                    //     dispatch(setToken(result?.data?.token));
                    // }).catch((e) => {
                    //     Toast.show("Oops! Something went wrong")
                    // })

                    await Auth.setLocalStorageData(
                        'account', result?.data?.user
                    ).then(() => {
                        dispatch(setUser(result?.data?.user));
                        navigation.navigate('Root');
                    }).catch((e) => {
                        Toast.show("Oops! Something went wrong")
                    })
                }
            })
    }

    return (
        <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
            <LinearGradContainer>
                <ProfileHeader title="Edit Profile" navigation={navigation} />

                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Image
                        source={images.user}
                        style={styles.userImage}
                    />
                    <View style={{ height: 20 }} />

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
                                placeholder="DOB"
                                minimumDate=""
                                colors={["#424167", "#16182C"]}
                                initialDate={profileData?.dob}
                                value={profileData?.dob}
                                containerStyle={Styles.datePickerContainer}
                                label="Date of birth"
                                onDateSelected={(val: string) => {
                                    setDOB(val);
                                }}
                            />
                        </SpaceBetweenRow>

                        <GradientButton
                            title="Save"
                            textStyle={styles.buttonText}
                            style={styles.button}
                            colors={["#0B6AF3", "#0B9FF3"]}
                            mode="contained"
                            onPress={handleLogin}
                        />
                    </View>
                </View>

                <CustomPanel loading={loading} />
                <CustomLoader loading={loading} />
            </LinearGradContainer>
        </ScrollView>
    )
}
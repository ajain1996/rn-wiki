import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradContainer from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import AddCoverBtn from './components/AddCoverBtn'
import { Colors, Styles } from '../../styles'
import { Row, SpaceBetweenRow } from '../../components/Wrapper'
import InputBox from '../../components/InputBox'
import MText from '../../components/Text'
import { Size } from '../../constants'
import CustomScroll from '../../components/CustomScroll'
import ImageButton from '../../components/ImageButton'
import LanguageSwitch from './components/LanguageSwitch'

export default function PersonalInformation({ navigation }: any) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [companyLogo, setCompanyLogo] = useState("");
    const [designation, setDesignation] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [altEmail, setAltEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [altPhone, setAltPhone] = useState("");
    const [location, setLocation] = useState("");
    const [altLocation, setAltLocation] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [defaultLanguage, setDefaultLanguage] = useState("");
    const [isDefaultLanguage, setIsdefaultLanguage] = useState(false)

    return (
        <LinearGradContainer>
            <CustomHeader title="Personal Information" />

            <CustomScroll>
                <AddCoverBtn onPress={() => { }} />

                <View style={Styles.horizontalMarginL}>
                    <SpaceBetweenRow>
                        <View>
                            <MText style={Styles.label}>First Name</MText>
                            <InputBox
                                value={firstName}
                                keyboardType="default"
                                onChangeText={(val) => {
                                    setFirstName(val)
                                }}
                                autoCapitalize="none"
                                colors={["#26262666", "#26262666"]}
                                inputContainer={[Styles.inputStyle, styles.inputStyle]}
                                placeholder='John'
                                placeholderTextColor="#8D8D8D"
                            />
                        </View>

                        <View>
                            <MText style={Styles.label}>Last Name</MText>
                            <InputBox
                                value={lastName}
                                keyboardType="default"
                                onChangeText={(val) => {
                                    setLastName(val)
                                }}
                                autoCapitalize="none"
                                colors={["#26262666", "#26262666"]}
                                inputContainer={[Styles.inputStyle, styles.inputStyle]}
                                placeholder='Doe'
                                placeholderTextColor="#8D8D8D"
                            />
                        </View>
                    </SpaceBetweenRow>

                    <View>
                        <MText style={Styles.label}>Company</MText>
                        <InputBox
                            value={company}
                            keyboardType="default"
                            onChangeText={(val) => {
                                setCompany(val)
                            }}
                            autoCapitalize="none"
                            colors={["#26262666", "#26262666"]}
                            inputContainer={Styles.inputStyle}
                            placeholder='XYZ Technologies'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <View>
                        <MText style={Styles.label}>Company Logo</MText>
                        <InputBox
                            value={companyLogo}
                            keyboardType="default"
                            onChangeText={(val) => {
                                setCompanyLogo(val)
                            }}
                            autoCapitalize="none"
                            colors={["#26262666", "#26262666"]}
                            inputContainer={[Styles.inputStyle, styles.pickerStyles]}
                            placeholder='XYZ Technologies'
                            placeholderTextColor="#8D8D8D"
                            onPress={() => { }}
                        />
                    </View>

                    <View>
                        <MText style={Styles.label}>Designation</MText>
                        <InputBox
                            value={designation}
                            keyboardType="default"
                            onChangeText={(val) => {
                                setDesignation(val)
                            }}
                            autoCapitalize="none"
                            colors={["#26262666", "#26262666"]}
                            inputContainer={Styles.inputStyle}
                            placeholder='Designation'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <View>
                        <MText style={Styles.label}>Description</MText>
                        <InputBox
                            value={description}
                            keyboardType="default"
                            onChangeText={(val) => {
                                setDescription(val)
                            }}
                            autoCapitalize="none"
                            colors={["#26262666", "#26262666"]}
                            inputContainer={Styles.inputStyle}
                            placeholder='Description'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <SpaceBetweenRow>
                        <View>
                            <MText style={Styles.label}>Email</MText>
                            <InputBox
                                value={email}
                                keyboardType="default"
                                onChangeText={(val) => {
                                    setEmail(val)
                                }}
                                autoCapitalize="none"
                                colors={["#26262666", "#26262666"]}
                                inputContainer={[Styles.inputStyle, styles.inputStyle]}
                                placeholder='username@example.com'
                                placeholderTextColor="#8D8D8D"
                            />
                        </View>

                        <View>
                            <MText style={Styles.label}>Alternate Email</MText>
                            <InputBox
                                value={altEmail}
                                keyboardType="default"
                                onChangeText={(val) => {
                                    setAltEmail(val)
                                }}
                                autoCapitalize="none"
                                colors={["#26262666", "#26262666"]}
                                inputContainer={[Styles.inputStyle, styles.inputStyle]}
                                placeholder='altusername@example.com'
                                placeholderTextColor="#8D8D8D"
                            />
                        </View>
                    </SpaceBetweenRow>

                    <SpaceBetweenRow>
                        <View>
                            <MText style={Styles.label}>Phone</MText>
                            <InputBox
                                value={phone}
                                keyboardType="default"
                                onChangeText={(val) => {
                                    setPhone(val)
                                }}
                                autoCapitalize="none"
                                colors={["#26262666", "#26262666"]}
                                inputContainer={[Styles.inputStyle, styles.inputStyle]}
                                placeholder='9988776655'
                                placeholderTextColor="#8D8D8D"
                            />
                        </View>

                        <View>
                            <MText style={Styles.label}>Alternate Phone</MText>
                            <InputBox
                                value={altPhone}
                                keyboardType="default"
                                onChangeText={(val) => {
                                    setAltPhone(val)
                                }}
                                autoCapitalize="none"
                                colors={["#26262666", "#26262666"]}
                                inputContainer={[Styles.inputStyle, styles.inputStyle]}
                                placeholder='9988776655'
                                placeholderTextColor="#8D8D8D"
                            />
                        </View>
                    </SpaceBetweenRow>

                    <SpaceBetweenRow>
                        <View>
                            <MText style={Styles.label}>Location</MText>
                            <InputBox
                                value={location}
                                keyboardType="default"
                                onChangeText={(val) => {
                                    setLocation(val)
                                }}
                                autoCapitalize="none"
                                colors={["#26262666", "#26262666"]}
                                inputContainer={[Styles.inputStyle, styles.inputStyle]}
                                placeholder='Sector 94, New Delhi'
                                placeholderTextColor="#8D8D8D"
                            />
                        </View>

                        <View>
                            <MText style={Styles.label}>Location URL</MText>
                            <InputBox
                                value={altLocation}
                                keyboardType="default"
                                onChangeText={(val) => {
                                    setAltLocation(val)
                                }}
                                autoCapitalize="none"
                                colors={["#26262666", "#26262666"]}
                                inputContainer={[Styles.inputStyle, styles.inputStyle]}
                                placeholder='Sector 94, New Delhi'
                                placeholderTextColor="#8D8D8D"
                            />
                        </View>
                    </SpaceBetweenRow>

                    <View>
                        <MText style={Styles.label}>Date Of Birth</MText>
                        <InputBox
                            value={dateOfBirth}
                            keyboardType="default"
                            onChangeText={(val) => {
                                setDateOfBirth(val)
                            }}
                            autoCapitalize="none"
                            colors={["#26262666", "#26262666"]}
                            inputContainer={Styles.inputStyle}
                            placeholder='25 December 2023'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <View>
                        <MText style={Styles.label}>Job Title</MText>
                        <InputBox
                            value={jobTitle}
                            keyboardType="default"
                            onChangeText={(val) => {
                                setJobTitle(val)
                            }}
                            autoCapitalize="none"
                            colors={["#26262666", "#26262666"]}
                            inputContainer={Styles.inputStyle}
                            placeholder='Job Title'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <SpaceBetweenRow>
                            <MText style={Styles.label}>Default Language</MText>
                            <LanguageSwitch
                                isDefaultLanguage={isDefaultLanguage}
                                setIsdefaultLanguage={setIsdefaultLanguage}
                            />
                        </SpaceBetweenRow>
                        <InputBox
                            value={defaultLanguage}
                            keyboardType="default"
                            onChangeText={(val) => {
                                setDefaultLanguage(val)
                            }}
                            autoCapitalize="none"
                            colors={["#26262666", "#26262666"]}
                            inputContainer={Styles.inputStyle}
                            placeholder='Default Language'
                            placeholderTextColor="#8D8D8D"
                        />
                    </View>

                    <ImageButton
                        title="Save"
                        style={{ marginBottom: 40 }}
                        onPress={() => { }}
                    />
                </View>
            </CustomScroll>
        </LinearGradContainer>
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
        width: "36%",
        height: 50,
        borderRadius: 4,
        alignItems: "flex-end",
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignSelf: "flex-end"
    },
    buttonTitle: {
        fontSize: 14,
        fontWeight: "400",
        color: "#B2B2B2",
        marginRight: 16
    },
    inputStyle: {
        width: Size.wWidth / 2.3,
    },
    pickerStyles: {
        width: Size.wWidth / 1.1,
    },
    editBg: {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: "#FFFFFF",
        ...Styles.centered,
        position: "absolute",
        bottom: -15
    },
})
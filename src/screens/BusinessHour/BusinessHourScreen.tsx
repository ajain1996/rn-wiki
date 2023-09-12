import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradContainer from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import { Styles } from '../../styles'
import { SpaceBetweenRow } from '../../components/Wrapper'
import MText from '../../components/Text'
import DatePicker from '../../components/DatePicker'
import moment from 'moment'
import ImageButton from '../../components/ImageButton'
import Svg from '../../assets/svg'
import MyButton from '../../components/MyButton'
import PlusDivider from './components/PlusDivider'
import CustomScroll from '../../components/CustomScroll'

export default function BusinessHourScreen() {
    const [startDate, setStartDate] = useState("");

    return (
        <LinearGradContainer>
            <CustomHeader title="Business Hour" />

            <CustomScroll>
                <View style={Styles.horizontalMarginL}>
                    <SpaceBetweenRow>
                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label="Monday"
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />

                        <MText style={{ marginTop: 40, marginHorizontal: 25 }}>To</MText>

                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label=""
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />
                    </SpaceBetweenRow>
                </View>

                <PlusDivider />

                <View style={Styles.horizontalMarginL}>
                    <SpaceBetweenRow>
                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label="Tuesday"
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />

                        <MText style={{ marginTop: 40, marginHorizontal: 25 }}>To</MText>

                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label=""
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />
                    </SpaceBetweenRow>
                </View>

                <PlusDivider />

                <View style={Styles.horizontalMarginL}>
                    <SpaceBetweenRow>
                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label="Wednesady"
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />

                        <MText style={{ marginTop: 40, marginHorizontal: 25 }}>To</MText>

                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label=""
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />
                    </SpaceBetweenRow>
                </View>

                <PlusDivider />

                <View style={Styles.horizontalMarginL}>
                    <SpaceBetweenRow>
                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label="Thursday"
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />

                        <MText style={{ marginTop: 40, marginHorizontal: 25 }}>To</MText>

                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label=""
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />
                    </SpaceBetweenRow>
                </View>

                <PlusDivider />

                <View style={Styles.horizontalMarginL}>
                    <SpaceBetweenRow>
                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label="Friday"
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />

                        <MText style={{ marginTop: 40, marginHorizontal: 25 }}>To</MText>

                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label=""
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />
                    </SpaceBetweenRow>
                </View>

                <PlusDivider />

                <View style={Styles.horizontalMarginL}>
                    <SpaceBetweenRow>
                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label="Saturday"
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />

                        <MText style={{ marginTop: 40, marginHorizontal: 25 }}>To</MText>

                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label=""
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />
                    </SpaceBetweenRow>
                </View>

                <PlusDivider />

                <View style={Styles.horizontalMarginL}>
                    <SpaceBetweenRow>
                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label="Sunday"
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />

                        <MText style={{ marginTop: 40, marginHorizontal: 25 }}>To</MText>

                        <DatePicker
                            placeholderText="Select"
                            minimumDate=""
                            maximumDate={moment().subtract(18, "years").toDate()}
                            value={startDate}
                            containerStyle={Styles.datePickerContainer}
                            label=""
                            onDateSelected={(val: string) => {
                                setStartDate(val);
                            }}
                            icon={
                                <Svg.DownArrowIcon />
                            }
                        />
                    </SpaceBetweenRow>
                    <MText />

                    <ImageButton
                        title="Save"
                        onPress={() => { }}
                    />

                    <MText />
                </View>
            </CustomScroll>
        </LinearGradContainer>
    )
}
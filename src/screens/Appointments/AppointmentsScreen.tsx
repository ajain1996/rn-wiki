import { View } from 'react-native'
import React, { useState } from 'react'
import LinearGradContainer from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import CustomScroll from '../../components/CustomScroll'
import styles from './styles'
import { SpaceBetweenRow } from '../../components/Wrapper'
import Svg from '../../assets/svg'
import MText from '../../components/Text'
import AppointmentInfo from './components/AppointmentInfo'
import ImageButton from '../../components/ImageButton'

export default function AppointmentsScreen({ navigation }: any) {
    const [AppointmentsData, setAppointmentsData] = useState([
        {
            day: "Branding",
            date: "Branding",
            time: "mediabow@gmail.com",
        },
        {
            day: "Branding",
            date: "Branding",
            time: "mediabow@gmail.com",
        },
    ]);

    return (
        <LinearGradContainer>
            <CustomHeader title="Appointments" />

            <CustomScroll>
                {AppointmentsData?.map((item, indx) => {
                    return (
                        <View style={styles.container} key={indx}>
                            <AppointmentInfo item={item} />

                            <SpaceBetweenRow style={styles.editLayout}>
                                <View style={styles.editDeleteBtn}>
                                    <Svg.EditWhiteIcon />
                                    <MText style={styles.valueText}>Edit</MText>
                                </View>

                                <View style={styles.editDeleteBtn}>
                                    <Svg.DeleteIcon />
                                    <MText style={styles.valueText}>Delete</MText>
                                </View>
                            </SpaceBetweenRow>
                        </View>
                    );
                })}

                <ImageButton
                    title="Add"
                    style={{ marginVertical: 28, marginHorizontal: 20 }}
                    onPress={() => { }}
                />
            </CustomScroll>
        </LinearGradContainer>
    )
}
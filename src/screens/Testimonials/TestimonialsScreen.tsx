import { View } from 'react-native'
import React, { useState } from 'react'
import LinearGradContainer from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import { SpaceBetweenRow } from '../../components/Wrapper'
import MText from '../../components/Text'
import Svg from '../../assets/svg'
import styles from './styles'
import VideoPhoto from './components/VideoPhoto'
import TestimonialInfo from './components/TestimonialInfo'
import CustomScroll from '../../components/CustomScroll'
import ImageButton from '../../components/ImageButton'

export default function TestimonialsScreen() {
    const [TestimonialsData, setTestimonialsData] = useState([
        {
            name: "Branding",
            email: "mediabow@gmail.com",
            phone: "+01 3246484651",
        },
        {
            name: "Branding",
            email: "mediabow@gmail.com",
            phone: "+01 3246484651",
        },
    ])

    return (
        <LinearGradContainer>
            <CustomHeader title="Testimonials" />

            <CustomScroll>
                {TestimonialsData.map((item, indx) => {
                    return (
                        <View style={styles.container} key={indx}>
                            <VideoPhoto />

                            <TestimonialInfo item={item} />

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
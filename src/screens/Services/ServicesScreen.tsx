import React from 'react'
import LinearGradContainer from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import ImageButton from '../../components/ImageButton'
import Service from './components/Service'
import CustomScroll from '../../components/CustomScroll'

export default function ServicesScreen() {
    return (
        <LinearGradContainer>
            <CustomHeader title="Services" />

            <CustomScroll>
                <Service />

                <Service />

                <ImageButton
                    title="Add"
                    style={{ marginTop: 40, marginHorizontal: 20 }}
                    onPress={() => { }}
                />
            </CustomScroll>
        </LinearGradContainer>
    )
}
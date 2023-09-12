import { View } from 'react-native'
import React from 'react'
import LinksInfoLayout from '../../SocialMediaLinks/components/LinksInfoLayout'

interface AppointmentInfoProps {
    item: any;
}

export default function AppointmentInfo({ item }: AppointmentInfoProps) {
    return (
        <View>
            <LinksInfoLayout
                label="Day"
                value={item?.day}
            />
            <LinksInfoLayout
                label="Date"
                value={item?.date}
            />
            <LinksInfoLayout
                label="Time"
                value={item?.time}
            />
        </View>
    )
}
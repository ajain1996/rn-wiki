import { View } from 'react-native'
import React from 'react'
import { Row } from '../../../components/Wrapper'
import MText from '../../../components/Text'
import styles from '../styles'
import { Styles } from '../../../styles'
import InputBox from '../../../components/InputBox'

interface LinksInfoLayoutProps {
    label: string;
    value: string;
}

export default function LinksInfoLayout({ label, value }: LinksInfoLayoutProps) {
    return (
        <Row style={Styles.verticalMargin}>
            <MText style={styles.leftText}>{label}</MText>
            <InputBox
                placeholder=''
                value={value}
                onChangeText={() => { }}
                colors={["#26262666", "#26262666"]}
                inputContainer={styles.inputContainer}
                inputStyle={{ height: 44 }}
            />
            {/* <View style={styles.grid2}>
                <MText style={styles.valueText}>{value}</MText>
            </View> */}
        </Row>
    )
}
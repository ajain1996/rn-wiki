import { View } from 'react-native'
import React from 'react'
import { Row } from '../../../components/Wrapper'
import MText from '../../../components/Text'
import styles from '../styles'
import { Styles } from '../../../styles'
import InputBox from '../../../components/InputBox'

interface TestimonialInfoProps {
    item: any;
}

export default function TestimonialInfo({ item }: TestimonialInfoProps) {
    return (
        <View>
            <Row>
                <MText style={styles.leftText}>Name</MText>
                <InputBox
                    placeholder=''
                    value={item?.name}
                    onChangeText={() => { }}
                    colors={["#26262666", "#26262666"]}
                    inputContainer={styles.inputContainer}
                    inputStyle={{ height: 44 }}
                />
            </Row>

            <Row style={Styles.verticalMargin}>
                <MText style={styles.leftText}>Email</MText>
                <InputBox
                    placeholder=''
                    value={item?.email}
                    onChangeText={() => { }}
                    colors={["#26262666", "#26262666"]}
                    inputContainer={styles.inputContainer}
                    inputStyle={{ height: 44 }}
                />
            </Row>

            <Row>
                <MText style={styles.leftText}>Phone</MText>
                <InputBox
                    placeholder=''
                    value={item?.phone}
                    onChangeText={() => { }}
                    colors={["#26262666", "#26262666"]}
                    inputContainer={styles.inputContainer}
                    inputStyle={{ height: 44 }}
                />
            </Row>
        </View>
    )
}
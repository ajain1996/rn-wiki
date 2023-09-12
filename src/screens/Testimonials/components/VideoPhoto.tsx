import { View } from 'react-native'
import React from 'react'
import { SpaceBetweenRow } from '../../../components/Wrapper'
import MText from '../../../components/Text'
import styles from '../styles'
import Svg from '../../../assets/svg'
import { Styles } from '../../../styles'

export default function VideoPhoto() {
    return (
        <SpaceBetweenRow style={Styles.marginBottomMid}>
            <View>
                <MText style={styles.titleText}>Video</MText>
                <View style={styles.grid}>
                    <Svg.AudioFileIcon />
                </View>
            </View>

            <View>
                <MText style={styles.titleText}>Photo</MText>
                <View style={styles.grid}>
                    <Svg.VideoFileIcon />
                </View>
            </View>
        </SpaceBetweenRow>
    )
}
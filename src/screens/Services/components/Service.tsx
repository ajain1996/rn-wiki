import { View, Platform, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import MText from '../../../components/Text'
import Svg from '../../../assets/svg'
import { Button } from 'react-native-paper'
import images from '../../../assets/images'
import DocumentPicker from 'react-native-document-picker';
import InputBox from '../../../components/InputBox'
import { Size } from '../../../constants'

export default function Service() {
    const [imageData, setImageData] = useState(null)

    const getImage = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
                mode: 'import',
                copyTo: 'cachesDirectory',
            });
            var realPath;
            if (Platform.OS === 'ios') {
                var RNFS = require('react-native-fs');
                let url = res?.uri;
                const split = url.split('/');
                const name = split.pop();
                const inbox = split.pop();
                realPath = `${RNFS.TemporaryDirectoryPath}${inbox}/${name}`;
            } else {
                realPath = res?.uri;
            }

            let fileRes = {
                "fileCopyUri": res[0]?.fileCopyUri,
                "name": res[0]?.name,
                "size": res[0]?.size,
                "type": res[0]?.type,
                "uri": res[0]?.uri,
                "fileName": res[0]?.name,
            }

            setImageData(fileRes)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
                throw err;
            }
        }
    };

    return (
        <View style={styles.container}>
            <Row>
                <MText style={styles.label}>Icon</MText>
                <View style={styles.iconsBg}>
                    {imageData !== null ? <Image
                        source={{ uri: imageData?.fileCopyUri }} resizeMode='contain'
                        style={{ width: 28, height: 28 }}
                    /> : <Image
                        source={images.building}
                        style={{ width: 30, height: 30 }}
                    />}
                </View>
                <Button labelStyle={styles.valueText} onPress={getImage} color="#000">
                    Change
                </Button>
            </Row>

            <Row style={{ marginTop: 26 }}>
                <MText style={styles.label}>Name</MText>
                <View style={{ width: 20 }} />
                <InputBox
                    placeholder=''
                    value='Branding'
                    onChangeText={() => { }}
                    colors={["#26262666", "#26262666"]}
                    inputContainer={{ width: "60%", paddingLeft: 8, borderRadius: 4, height: 38 }}
                />
                {/* <MText style={styles.valueText}>Branding</MText> */}
            </Row>

            <Row style={{ marginTop: 16 }}>
                <MText style={styles.label}>URL</MText>
                <View style={{ width: 20 }} />
                <InputBox
                    placeholder=''
                    value='https.//www.mediabow.com'
                    onChangeText={() => { }}
                    colors={["#26262666", "#26262666"]}
                    inputContainer={{ width: "60%", paddingLeft: 8, borderRadius: 4, height: 38 }}
                />
                {/* <MText style={styles.valueText}>https.//www.mediabow.com</MText> */}
            </Row>

            <SpaceBetweenRow style={styles.editLayout}>
                <View style={styles.editDeleteBtn}>
                    <Svg.EyePointedIcon />
                    <MText style={styles.iconText}>View</MText>
                </View>

                <View style={styles.editDeleteBtn}>
                    <Svg.EditWhiteIcon />
                    <MText style={styles.iconText}>Edit</MText>
                </View>

                <View style={styles.editDeleteBtn}>
                    <Svg.DeleteIcon />
                    <MText style={styles.iconText}>Delete</MText>
                </View>
            </SpaceBetweenRow>
        </View>
    )
}
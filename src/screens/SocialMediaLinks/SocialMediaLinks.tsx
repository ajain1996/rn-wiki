import { View } from 'react-native'
import React, { useState } from 'react'
import LinearGradContainer from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import CustomScroll from '../../components/CustomScroll'
import styles from './styles'
import LinksInfoLayout from './components/LinksInfoLayout'
import { SpaceBetweenRow } from '../../components/Wrapper'
import RippleButton from '../../components/RippleButton'
import ImageButton from '../../components/ImageButton'

export default function SocialMediaLinks() {
    const [SocialMediaLinksData, setsocialMediaLinksData] = useState([
        {
            label: "Website",
            value: "Branding",
        },
        {
            label: "Twitter",
            value: "Branding",
        },
        {
            label: "Instagram",
            value: "https.//www.mediabow.com",
        },
        {
            label: "Facebook",
            value: "Branding",
        },
        {
            label: "Youtube",
            value: "Branding",
        },
        {
            label: "Linkedin",
            value: "https.//www.mediabow.com",
        },
        {
            label: "Whatsapp",
            value: "https.//www.mediabow.com",
        },
        {
            label: "Pintrest",
            value: "https.//www.mediabow.com",
        },
        {
            label: "Tiktok",
            value: "https.//www.mediabow.com",
        },
    ]);

    return (
        <LinearGradContainer>
            <CustomHeader title="Social Media Links" />

            <CustomScroll style={{ marginTop: "8%" }}>
                {SocialMediaLinksData?.map((item, indx) => {
                    return (
                        <View style={styles.container} key={indx}>
                            <LinksInfoLayout
                                label={item?.label}
                                value={item?.value}
                            />
                        </View>
                    );
                })}

                <SpaceBetweenRow style={{ padding: 20, marginBottom: 28 }}>
                    <RippleButton
                        title="Edit"
                        mode='contained'
                        style={styles.editBtn}
                        textStyle={styles.buttonTitle}
                        color="#000"
                        onPress={() => { }}
                    />

                    <ImageButton
                        title="Add"
                        style={styles.saveBtn}
                        onPress={() => { }}
                    />
                </SpaceBetweenRow>
            </CustomScroll>
        </LinearGradContainer>
    )
}
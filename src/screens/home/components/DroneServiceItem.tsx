import { StyleSheet, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import images from '../../../assets/images'
import { Size } from '../../../constants'
import MText from '../../../components/Text'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import Button from '../../../components/MyButton'
import { Icons } from '../../../components/Icon'
import { Styles } from '../../../styles'
import moment from 'moment'

interface DroneServiceItemProps {
    itm: any;
    width?: number;
    navigation: any;
}

export default function DroneServiceItem({ itm, width, navigation }: DroneServiceItemProps) {
    const item = itm?.droneModel;
    console.log('\n itm?.userId?.rated: ', itm?._id);

    return (
        <TouchableHighlight style={styles.box} onPress={() => {
            navigation.navigate("DroneDetailscreen", {
                droneId: itm?._id
            })
        }}>
            <LinearGradient colors={["#424167", "#16182C", "#16182C"]} style={[styles.container, {
                width: width ? width : Size.wWidth / 2.3,
            }]}>
                <Button
                    title={`${itm?.userId?.rated}`}
                    textStyle={styles.rating}
                    background='#515165'
                    style={styles.ratingBtn}
                    icon='star'
                    iconColor='#FFD233'
                    iconSize={9}
                    iconType={Icons.Entypo}
                    iconStyle={styles.starIcon}
                />
                <Image
                    source={{ uri: item?.droneImage }}
                    resizeMode="stretch"
                    style={{ width: Size.wWidth / 2.9, height: Size.wWidth / 4.2 }}
                />
                <Row style={Styles.marginTop}>
                    <MText style={styles.name}>{item?.droneName}</MText>
                    <MText style={styles.price}>{itm?.price}</MText>
                </Row>

                <MText style={styles.info}>{itm?.description}</MText>

                <SpaceBetweenRow style={{ width: "44%" }}>
                    <Row>
                        <Image
                            source={images.date}
                            style={{ width: 11, height: 11, marginTop: 4, marginRight: 4 }}
                        />
                        <MText style={styles.info}>{moment(item?.createdAt).format("DD:YYYY")}</MText>
                    </Row>
                    <Row>
                        <Image
                            source={images.time}
                            style={{ width: 11, height: 11, marginTop: 4, marginRight: 4 }}
                        />
                        <MText style={styles.info}>{moment(item?.createdAt).format("HH:MM:SS")}</MText>
                    </Row>
                </SpaceBetweenRow>
            </LinearGradient>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 0.4,
        borderColor: "#424161",
        borderRadius: 20,
        marginVertical: 6,
    },
    container: {
        width: Size.wWidth / 2.3,
        padding: 14,
        alignContent: "center",
        borderRadius: 20,
        // marginVertical: 6,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff"
    },
    name: {
        fontWeight: "700",
        color: "#fff",
        width: "80%"
    },
    price: {
        fontSize: 8,
        fontWeight: "700",
        color: "#fff",
        width: "24%",
        marginLeft: -3
    },
    info: {
        fontSize: 9,
        fontWeight: "500",
        color: "#979797",
        width: "110%",
        marginTop: 6,
        marginBottom: 2
    },
    ratingBtn: {
        width: 42,
        height: 20,
        borderRadius: 6,
        paddingTop: 2,
        alignSelf: "flex-end",
        marginBottom: 10
    },
    rating: {
        fontSize: 9,
        fontWeight: "500",
        color: "#979797",
    },
    starIcon: {
        marginLeft: 6,
        marginRight: -2,
        marginTop: -2
    }
})
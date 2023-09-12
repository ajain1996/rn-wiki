import { View, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradContainer from '../../components/LinearGradContainer'
import CustomHeader from '../../components/CustomHeader'
import { Styles } from '../../styles'
import images from '../../assets/images'

export default function CardTemplatesScreen({ navigation }: any) {
    return (
        <LinearGradContainer>
            <CustomHeader title="Card Templates" />

            <View style={styles.container}>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: "center" }}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    renderItem={({ }) => {
                        return (
                            <Image
                                source={images.cardTemplate}
                                resizeMode="contain"
                                style={styles.cardTemplate}
                            />
                        );
                    }}
                    ListFooterComponent={
                        <View style={{ height: 80 }} />
                    }
                />
            </View>
        </LinearGradContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        ...Styles.paddingHorizontalM,
        marginTop: 20,
    },
    cardTemplate: {
        width: "48%",
        height: 260,
        marginVertical: 12
    }
})
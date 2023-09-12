import React from 'react'

import { View, StyleSheet } from 'react-native'
import { SpaceBetweenRow } from './Wrapper'
import HeaderLeft from './HeaderLeft'
import { Size } from '../constants'
import MText from './Text'
import { useNavigation } from '@react-navigation/native'

interface CustomHeaderProps {
  title: string;
}

export default function CustomHeader({ title }: CustomHeaderProps) {
  const navigaion = useNavigation();

  return (
    <View style={styles.container}>
      <SpaceBetweenRow>
        <HeaderLeft onPress={() => { navigaion.goBack() }} />

        <MText style={styles.title}>{title}</MText>

        <MText style={{ width: 50 }} />
      </SpaceBetweenRow>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Size.vl + Size.s + Size.xs,
    backgroundColor: "transparent",
    padding: Size.m,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff"
  }
})

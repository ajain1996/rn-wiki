import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, Icons } from './Icon';
import { Styles } from '../styles';

interface HeaderProps {
  onPress?: () => void;
}

const HeaderLeft = ({ onPress }: HeaderProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.6}>
      <Icon
        type={Icons.AntDesign}
        name={'arrowleft'}
        color={"#fff"}
        size={18}
      />
    </TouchableOpacity>
  )
};

export default HeaderLeft;

const styles = StyleSheet.create({
  button: {
    height: 38,
    width: 38,
    borderRadius: 100,
    ...Styles.centered,
    backgroundColor: "#262626"
  },
});

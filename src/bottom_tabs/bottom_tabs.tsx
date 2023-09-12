import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Size } from '../constants';
import HomeScreen from '../screens/home/HomeScreen';
import images from '../assets/images';
import { Colors } from '../styles';
import ProfileScreen from '../screens/profile/MyProfileScreen';
import Svg from '../assets/svg';

const Tab = createBottomTabNavigator();

export function SampleScreens() {
  return (
    <View>
      <Text>bottom_tabs</Text>
    </View>
  )
}

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarLabel: '',
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 0,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopStartRadius: 8,
          borderTopEndRadius: 8,
          width: Size.wWidth,
          backgroundColor: Colors.primary,
          paddingHorizontal: 36,
          borderTopWidth: 0
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={focused ? <Svg.HomeIcon /> : <Svg.HomeIcon />}
                text="Home"
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MyCardTab"
        component={SampleScreens}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={focused ? <Svg.MyCardIcon /> : <Svg.MyCardIcon />}
                text={`Blogs`}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="RecentTab"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={focused ? <Svg.RecentIcon /> : <Svg.RecentIcon />}
                text="Chat"
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={focused ? <Svg.ProfileIcon /> : <Svg.ProfileIcon />}
                text="Chat"
                focused={focused}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

interface BuildTabComponent {
  image: any;
  text: string;
  focused: boolean;
}

const BuildTabComponent = ({ image, text, focused }: BuildTabComponent) => {
  return (
    <>
      <View style={[styles.borderTop, { height: focused ? 5 : 0 }]} />
      <View style={styles.container}>
        {image}
        {/* <Image
          source={image} resizeMode="stretch"
          style={{ width: 32, height: 32, marginTop: 4 }}
        /> */}
        {/* <View style={{ width: 60, alignItems: 'center' }}>
      </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Size.wWidth / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderTop: {
    width: 50,
    height: 5,
    backgroundColor: Colors.blue,
    position: "absolute",
    top: 0,
    borderRadius: 100,
  }
});

export default BottomTabs;

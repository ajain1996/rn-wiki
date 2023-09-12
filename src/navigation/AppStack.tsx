import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from '../bottom_tabs/bottom_tabs';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import ForgotPassword from '../screens/auth/ForgotPassword';
import ChangePasswordScreen from '../screens/auth/ChangePasswordScreen';
import MyProductsScreen from '../screens/myCard/MyProductsScreen';
import MyCardScreen from '../screens/myCard/MyCardScreen';
import PersonalInformation from '../screens/personalInformation/PersonalInformation';
import CardTemplatesScreen from '../screens/CardTemplates/CardTemplatesScreen';
import BusinessHourScreen from '../screens/BusinessHour/BusinessHourScreen';
import ServicesScreen from '../screens/Services/ServicesScreen';
import TestimonialsScreen from '../screens/Testimonials/TestimonialsScreen';
import AppointmentsScreen from '../screens/Appointments/AppointmentsScreen';
import SocialMediaLinks from '../screens/SocialMediaLinks/SocialMediaLinks';
import MyProfileScreen from '../screens/profile/MyProfileScreen';
import QrCodeScreen from '../screens/qrCode/QrCodeScreen';
import PauseScreen from '../screens/qrCode/PauseScreen';
import PlansScreen from '../screens/plans/PlansScreen';
import ChoosePlan from '../screens/plans/ChoosePlan';
import PointsCollectedScreen from '../screens/pointsCollected/PointsCollectedScreen';
import ReferFriendScreen from '../screens/referFriend/ReferFriendScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import LanguageScreen from '../screens/settings/LanguageScreen';
import ResetPasswordScreen from '../screens/settings/ResetPasswordScreen';
import CheckYourEmail from '../screens/settings/CheckYourEmail';
import CreateNewPassword from '../screens/settings/CreateNewPassword';
import DeleteAccount from '../screens/settings/DeleteAccount';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='MyProductsScreen'
        >
            <Stack.Screen
                name="Root"
                component={BottomTabs}
            />

            <Stack.Screen
                name="MyProductsScreen"
                component={MyProductsScreen}
            />

            <Stack.Screen
                name="MyCardScreen"
                component={MyCardScreen}
            />

            <Stack.Screen
                name="PersonalInformation"
                component={PersonalInformation}
            />

            <Stack.Screen
                name="CardTemplatesScreen"
                component={CardTemplatesScreen}
            />

            <Stack.Screen
                name="ServicesScreen"
                component={ServicesScreen}
            />

            <Stack.Screen
                name="BusinessHourScreen"
                component={BusinessHourScreen}
            />

            <Stack.Screen
                name="TestimonialsScreen"
                component={TestimonialsScreen}
            />

            <Stack.Screen
                name="AppointmentsScreen"
                component={AppointmentsScreen}
            />

            <Stack.Screen
                name="SocialMediaLinks"
                component={SocialMediaLinks}
            />
            <Stack.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
            />
            <Stack.Screen
                name="ChangePasswordScreen"
                component={ChangePasswordScreen}
            />
            <Stack.Screen
                name="MyProfileScreen"
                component={MyProfileScreen}
            />
            <Stack.Screen
                name="QrCodeScreen"
                component={QrCodeScreen}
            />
            <Stack.Screen
                name="PauseScreen"
                component={PauseScreen}
            />
            <Stack.Screen
                name="PlansScreen"
                component={PlansScreen}
            />
            <Stack.Screen
                name="ChoosePlan"
                component={ChoosePlan}
            />
            <Stack.Screen
                name="PointsCollectedScreen"
                component={PointsCollectedScreen}
            />
            <Stack.Screen
                name="ReferFriendScreen"
                component={ReferFriendScreen}
            />
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
            />
            <Stack.Screen
                name="LanguageScreen"
                component={LanguageScreen}
            />
            <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
            />
            <Stack.Screen
                name="CheckYourEmail"
                component={CheckYourEmail}
            />
            <Stack.Screen
                name="CreateNewPassword"
                component={CreateNewPassword}
            />
            <Stack.Screen
                name="DeleteAccount"
                component={DeleteAccount}
            />
        </Stack.Navigator>
    );
}

export default AppStack;


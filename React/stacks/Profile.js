import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import MainPage from '../screens/MainPage';
import ThemesPage from '../screens/ThemesPage';
import ProfilPage from '../screens/ProfilePage';

const Stack = createStackNavigator();

const Profile = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="ProfilePage" component={ProfilPage} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}

export default Profile
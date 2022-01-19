import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import MainPage from '../screens/MainPage';
import ThemesPage from '../screens/ThemesPage';

const Stack = createStackNavigator();

const Home = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
        <Stack.Screen name="ThemesPage" component={ThemesPage} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}

export default Home
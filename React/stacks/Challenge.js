import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import ChallengePage from '../screens/ChallengesPage'

const Stack = createStackNavigator();

const Challenge = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="ChallengePage" component={ChallengePage} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}

export default Challenge
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ThemesPage from '../screens/ThemesPage';

const Stack = createStackNavigator();

const Test = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="ThemesPage" component={ThemesPage} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}

export default Test
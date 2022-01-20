import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ProfilePage from '../screens/ProfilePage';
import ThemesPage from '../screens/ThemesPage';
import LexiquePage from '../screens/LexiquePage';

const Stack = createStackNavigator();

const Profile = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{headerShown: false}}/>
        <Stack.Screen name="ThemesPage" component={ThemesPage} options={{headerShown: false}}/>
        <Stack.Screen name="LexiquePage" component={LexiquePage} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}

export default Profile
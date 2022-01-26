import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ProfilePage from '../screens/ProfilePage';
import ThemesPage from '../screens/ThemesPage';
import StatistiquesPage from '../screens/StatistiquesPage';
import LexiquePage from '../screens/LexiquePage';
import LessonPage from '../screens/LessonPage';

const Stack = createStackNavigator();

const Profile = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{headerShown: false}}/>
        <Stack.Screen name="ThemesPage" component={ThemesPage} options={{headerShown: false}}/>
        <Stack.Screen name="StatistiquesPage" component={StatistiquesPage} options={{headerShown: false}}/>
        <Stack.Screen name="LexiquePage" component={LexiquePage} options={{headerShown: false}}/>
        <Stack.Screen name="LessonPage" component={LessonPage} options={{headerShown: false}}/>
    </Stack.Navigator>
    );
};

export default Profile;
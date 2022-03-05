import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ProfilePage from '../screens/ProfilePage';
import PreferencesPage from '../screens/PreferencesPage';
import StatistiquesPage from '../screens/StatistiquesPage';
import HistoriquePage from '../screens/HistoriquePage';
import LexiquePage from '../screens/LexiquePage';
import LessonPage from '../screens/LessonPage';
import PresentationPage from '../screens/PresentationPage';

const Stack = createStackNavigator();

const Profile = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{headerShown: false}}/>
        <Stack.Screen name="PreferencesPage" component={PreferencesPage} options={{headerShown: false}}/>
        <Stack.Screen name='PresentationPage' component={PresentationPage} options={{headerShown:false}}/>
        <Stack.Screen name="StatistiquesPage" component={StatistiquesPage} options={{headerShown: false}}/>
        <Stack.Screen name="HistoriquePage" component={HistoriquePage} options={{headerShown: false}}/>
        <Stack.Screen name="LexiquePage" component={LexiquePage} options={{headerShown: false}}/>
        <Stack.Screen name="LessonPage" component={LessonPage} options={{headerShown: false}}/>
    </Stack.Navigator>
    );
};

export default Profile;
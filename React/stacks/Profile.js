import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ProfilePage from '../screens/ProfilePage';

const Stack = createStackNavigator();

const Profile = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}

export default Profile
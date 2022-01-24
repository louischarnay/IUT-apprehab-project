import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ChallengePage from '../screens/ChallengePage';

const Stack = createStackNavigator();

const Challenge = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="ChallengePage" component={ChallengePage} options={{headerShown: false}}/>
    </Stack.Navigator>
    );
};

export default Challenge;
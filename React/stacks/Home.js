import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from '../screens/MainPage';
import ThemesPage from '../screens/ThemesPage';
import ExercisesPage from '../screens/ExercisesPage'
import ExerciseScreen from '../screens/ExerciseScreen';

const Stack = createStackNavigator();

const Home = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
        <Stack.Screen name="ThemesPage" component={ThemesPage} options={{headerShown: false}}/>
        <Stack.Screen name="ExercisesPage" component={ExercisesPage} options={{headerShown: false}}/>
        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}

export default Home
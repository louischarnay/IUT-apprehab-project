import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';


import MainPage from './screens/MainPage';
import ThemesPage from './screens/ThemesPage';
import ChallengesPage from './screens/ChallengesPage';
import ExerciseSelectionPage from './screens/ExerciseSelectionPage';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="MainPage" component={MainPage} options={{headerShown:false}} />
          <Stack.Screen name="ThemesPage" component={ThemesPage} options={{headerShown:false}} />
          <Stack.Screen name="ChallengesPage" component={ChallengesPage} options={{headerShown:false}}/>
          <Stack.Screen name="ExerciseSelectionPage" component={ExerciseSelectionPage} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
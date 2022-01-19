import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD


import MainPage from './screens/MainPage';
import ThemesPage from './screens/ThemesPage';
import ChallengesPage from './screens/ChallengesPage';
import ExerciseSelectionPage from './screens/ExerciseSelectionPage';
=======
import Home from './stacks/Home';
import Profile from './stacks/Profile';
import Challenge from './stacks/Challenge';
>>>>>>> b6ed61f77d6313748a0ca314490966f98a661e9a

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
<<<<<<< HEAD

          <Stack.Screen name="MainPage" component={MainPage} options={{headerShown:false}} />
          <Stack.Screen name="ThemesPage" component={ThemesPage} options={{headerShown:false}} />
          <Stack.Screen name="ChallengesPage" component={ChallengesPage} options={{headerShown:false}}/>
          <Stack.Screen name="ExerciseSelectionPage" component={ExerciseSelectionPage} options={{headerShown:false}}/>
=======
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
          <Stack.Screen name="Challenge" component={Challenge} options={{headerShown: false}}/>
>>>>>>> b6ed61f77d6313748a0ca314490966f98a661e9a
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import NavigBar from './modules/NavigBar';
import Challenge from './modules/Challenge';
import Profil from './modules/Profil';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={NavigBar} />
         
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
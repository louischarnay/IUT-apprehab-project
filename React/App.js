import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';


import Challenge from './modules/Challenge';
import Profil from './modules/Profil';

import Categories from './modules/Categories'
import Lessons from './modules/Lessons'
import Header from './modules/Header';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="MainPage" component={NavigBar} />
         

          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Lessons" component={Lessons} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
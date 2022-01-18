import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';


import Challenge from './modules/Challenge';
import Profil from './modules/Profil';
import NavigBar from './modules/NavigBar';
import Categories from './modules/Categories'
import Lessons from './modules/ItemList'
import Header from './modules/Header';
import MainPage from './screens/MainPage';
import ThemesPage from './screens/ThemesPage';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="MainPage" component={MainPage} options={{headershown:false}} />
          <Stack.Screen name="Categories" component={ThemesPage} options={{headershown:false}} />
          

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
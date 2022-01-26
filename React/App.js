import React from 'react';
import { AsyncStorage } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from './stacks/Home';
import Profile from './stacks/Profile';
import Challenge from './stacks/Challenge';

global.mainColor = '#8dd7cf';
const getAllDataFromApi = async () => {
    //AsyncStorage.clear();
    const response = await fetch('https://apprehab.000webhostapp.com/api/api.json' + '?' + new Date());
    const json = await response.json();
    console.log(json)
    for (var cpt = 0; cpt < json.categories.length; cpt++) {
        try {
            const toString = JSON.stringify(json.categories[cpt]);
            await AsyncStorage.setItem('categorie' + cpt, toString);
        } catch (error){
        console.log('error ' + error)
        }
    }
    for (cpt = 0; cpt < json.themes.length; cpt++) {
        try{
            const toString = JSON.stringify(json.themes[cpt]);
            await AsyncStorage.setItem('theme' + cpt, toString);
        } catch(error){
            console.log('error ' + error)
        }
    }
    for (cpt = 0; cpt < json.exercices.length; cpt++) {
        try{
            const toString = JSON.stringify(json.exercices[cpt]);
            await AsyncStorage.setItem('exercice' + cpt, toString);
        } catch(error){
            console.log('error '+ error)
        }
    }
    for (cpt = 0; cpt < json.items.length; cpt++) {
        try{
            const toString = JSON.stringify(json.items[cpt]);
            await AsyncStorage.setItem('item' + cpt, toString);
        } catch(error){
            console.log('error ' + error)
        }
    }
    try {
        await AsyncStorage.setItem('categoriesLength', '' + json.categories.length)
        await AsyncStorage.setItem('themesLength', '' + json.themes.length)
        await AsyncStorage.setItem('exercicesLength', '' + json.exercices.length)
        await AsyncStorage.setItem('itemsLength', '' + json.items.length)
        toString = JSON.stringify(json.categories)
        await AsyncStorage.setItem('allCategories', toString)
        toString = JSON.stringify(json.themes)
        await AsyncStorage.setItem('allThemes', toString)
        toString = JSON.stringify(json.exercices)
        await AsyncStorage.setItem('allExercices', toString)
        toString = JSON.stringify(json.items)
        await AsyncStorage.setItem('allItems', toString);
        toString = JSON.stringify(json.mots);
        await AsyncStorage.setItem('allMots', toString);
        await AsyncStorage.getItem('themesLength');
    } catch(error){
        console.log('error ' + error);
    }
};

async function setMonth(){
    let month = await AsyncStorage.getItem("monthOfUpdate")
    if(month === null) {
        let date = "" + new Date().getMonth()
        await AsyncStorage.setItem("monthOfUpdate", date)
    } else{
        let lastUpdate = await AsyncStorage.getItem("monthOfUpdate")
        if(lastUpdate !== ("" + new Date().getMonth())){
            await AsyncStorage.setItem("amountExercicesDoneMonth", "0")
            let date = "" + new Date().getMonth()
            await AsyncStorage.setItem("monthOfUpdate", date)
            console.log("update")
        }
    }
}

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    getAllDataFromApi();
    setMonth()
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
          <Stack.Screen name="Challenge" component={Challenge} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
};
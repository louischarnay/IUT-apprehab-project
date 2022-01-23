import React from 'react';
import { AsyncStorage } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from './stacks/Home';
import Profile from './stacks/Profile';
import Challenge from './stacks/Challenge';

/*import * as SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const db = SQLite.openDatabase({
    name: 'database.db',
    location: 'default'
},
    () => { console.log("database ouverte")},
    error => { console.log("erreur " + error) }
);

const createTable = () => {
    db.transaction((tx) =>{
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS categories(id_categorie INTEGER PRIMARY KEY AUTOINCREMENT, nom_categorie VARCHAR(20))"
        )
    })
}

async function fillTable(){
    await db.transaction(async (tx) =>{
        await tx.executeSql(
            "INSERT INTO categories(nom_categorie) VALUES(?)",
            [],
            () => {console.log("réussi")},
            error => {console.log("erreur " +  error)}
        )
    })
}*/

global.mainColor = '#8dd7cf';
const getAllDataFromApi = async () => {
    //SyncStorage.clear();
    const response = await fetch('https://apprehab.000webhostapp.com/api/api.json');
    const json = await response.json();
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

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    getAllDataFromApi();
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
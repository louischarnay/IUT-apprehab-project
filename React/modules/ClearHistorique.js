import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, StatusBar } from "react-native";

async function setStorage(key: string, value: string){
    if(typeof value === Object){
        value = JSON.stringify(value)
    }
    try {
        await AsyncStorage.setItem(key, value)
    }catch (error){
    }
}

async function clear(){
    let nbItemsHistorique
    try {
        nbItemsHistorique = await AsyncStorage.getItem('nbItemsHistorique')
    } catch (e){}
    nbItemsHistorique = Number(nbItemsHistorique)
    for (let cpt = 0; cpt < nbItemsHistorique; cpt++){
        await AsyncStorage.removeItem('itemHistorique' + cpt)
    }
    setStorage('nbItemsHistorique', '0')
}

const ClearHistorique = (params) => {
    return (
        <View style={styles.item} backgroundColor={mainColor} onStartShouldSetResponder={() => {clear(), console.log(params.navigation.goBack())}}>
            <Text style={styles.title}>Réinitialiser l'historique</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      padding: 20,
      borderRadius: 10,
      justifyContent: 'center',
      textAlign: 'center',
      marginHorizontal: 10,
      marginVertical: -1,
      marginTop: StatusBar.currentHeight
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'justify'
    },
});

export default ClearHistorique;
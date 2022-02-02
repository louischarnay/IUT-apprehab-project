import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, StatusBar, Vibration } from "react-native";

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

const ClearHistorique = () => {
    return (
        <View style={styles.item} backgroundColor={mainColor} onStartShouldSetResponder={() => {Vibration.vibrate(10),clear()}}>
            <Text style={styles.title}>Réinitialiser l'historique</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      padding: 30,
      borderRadius: 10,
      justifyContent: 'center',
      textAlign: 'center',
      marginHorizontal: 10,
      marginVertical: 10
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'justify'
    },
});

export default ClearHistorique;
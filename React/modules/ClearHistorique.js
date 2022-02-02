import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Button, StyleSheet } from "react-native";

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
        <View>
            <Button style={styles.button} title="Vider l'historique" onPress={() => {clear()}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      margin: 50,
      color: 'black'
    }
})

export default ClearHistorique;
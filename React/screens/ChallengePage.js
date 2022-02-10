import React from 'react';
import {View} from "react-native";
import Header from '../modules/Header';
import ChallengePicture from '../modules/ChallengePicture';
import NavigBar from '../modules/NavigBar';
import AsyncStorage from "@react-native-async-storage/async-storage";

async function sendComment(rate: string, comment: string, exerciceId: string) {
    let url = 'https://apprehab.000webhostapp.com/api/apiTraitement.php?rate=' + rate + '&comment='
        + comment + '&exerciceId=' + exerciceId
    await fetch(url)
}

async function setStorage(key: string, value: string){
    if(typeof value === Object){
        value = JSON.stringify(value)
    }
    try {
        await AsyncStorage.setItem(key, value)
    }catch (error){
    }
}

async function clearHistorique(){
    let nbItemsHistorique
    try {
        nbItemsHistorique = await AsyncStorage.getItem('nbItemsHistorique')
    }catch (e){}
    nbItemsHistorique = Number(nbItemsHistorique)
    for (let cpt = 0; cpt < nbItemsHistorique; cpt++){
        await AsyncStorage.removeItem('itemHistorique' + cpt)
    }
    setStorage('nbItemsHistorique', '0')
}

const ChallengePage = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Header navigation={navigation}/>
            </View>
            <View style={{flex: 5}}>
                <ChallengePicture navigation={navigation}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
};

export default ChallengePage;
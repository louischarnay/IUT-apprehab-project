import React from 'react';
import {AsyncStorage, View} from 'react-native';
import Header from '../modules/Header';
import Categories from '../modules/Categories'
import NavigBar from '../modules/NavigBar';

async function logout() {
    var log = await AsyncStorage.getItem("nbTimesCréativité")
    console.log(log)
    log = await AsyncStorage.getItem("nbTimesSport")
    console.log(log)
    log = await AsyncStorage.getItem("nbTimesCognition")
    console.log(log)
    log = await AsyncStorage.getItem("nbTimesPsycho-éducation")
    console.log(log)
    log = await AsyncStorage.getItem("nbTimesRelaxation")
    console.log(log)
    log = await AsyncStorage.getItem("nbTimesCulture & Infos")
    console.log(log)
}

const MainPage = ({navigation}) => {
    logout()
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Header/>
            </View>
            <View style={{flex: 5}}>
                <Categories navigation={navigation}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
};

export default MainPage;
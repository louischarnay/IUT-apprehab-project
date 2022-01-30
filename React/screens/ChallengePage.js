import React from 'react';
import { View } from 'react-native';
import Header from '../modules/Header';
import ChallengePicture from '../modules/ChallengePicture';
import NavigBar from '../modules/NavigBar';

async function sendComment(rate: string, comment: string, exerciceId: string) {
    let url = 'https://apprehab.000webhostapp.com/api/apiTraitement.php?rate=' + rate + '&comment='
        + comment + '&exerciceId=' + exerciceId
    await fetch(url)
}

const ChallengePage = ({navigation}) => {
    sendComment('4', 'new comment', '1')
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
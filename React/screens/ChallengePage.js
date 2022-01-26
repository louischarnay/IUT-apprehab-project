import React from 'react';
import { View } from 'react-native';
import Header from '../modules/Header';
import ChallengePicture from '../modules/ChallengePicture';
import NavigBar from '../modules/NavigBar';

function sendComment(rate: number, comment: string){
    try{
        fetch('https://apprehab.000webhostapp.com/api/apiTraitement.php',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rate: rate,
                comment: comment
            })
        })
    } catch(error){
        console.log(error)
    }
}

const ChallengePage = ({navigation}) => {
    sendComment(4, 'new comment')
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
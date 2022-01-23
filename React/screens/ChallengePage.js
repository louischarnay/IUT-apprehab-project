import React from 'react';
import { View } from 'react-native';
import Header from '../modules/Header';
import ChallengePicture from '../modules/ChallengePicture';
import NavigBar from '../modules/NavigBar';

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
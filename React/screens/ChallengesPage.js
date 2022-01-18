import React from 'react';
import Header from '../modules/Header';
import Challenge from '../modules/Challenge';
import NavigBar from '../modules/NavigBar';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';


const ChallengesPage = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 6}}>
                <Challenge navigation={navigation}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
}

export default ChallengesPage
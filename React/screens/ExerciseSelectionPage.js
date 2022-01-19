import React from 'react';
import Header from '../modules/Header';
import Categories from '../modules/Categories'
import NavigBar from '../modules/NavigBar';
import ExerciseSelection from '../modules/ExerciseSelection';
import FilterPicker from '../modules/FilterPicker';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';
import ExerciseSelection from '../modules/ExerciseSelection';

const ExerciseSelectionPage = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 6}}>
                <ExerciseSelection navigation={navigation}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
}

export default ExerciseSelectionPage
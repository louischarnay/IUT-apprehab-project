import React from 'react';
import { View } from 'react-native';
import NavigBar from '../modules/NavigBar';
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
};

export default ExerciseSelectionPage;
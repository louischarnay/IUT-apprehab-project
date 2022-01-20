import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Dimensions, Image } from 'react-native';
import ThemeSelected from '../modules/ThemeSelected';
import Lesson from '../modules/Lesson';
import NavigBar from '../modules/NavigBar';

const LessonPage = ({route, navigation}) => {
    const title = route.params.title
    const color = route.params.color
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <ThemeSelected navigation={navigation} title={title} color={color}/>
            </View>
            <View style={{flex: 5}}>
                <Lesson navigation={navigation} color={color}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
}

export default LessonPage
import React from 'react';
import ItemList from '../modules/ItemList';
import NavigBar from '../modules/NavigBar';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Dimensions, Image } from 'react-native';
import ThemeSelected from '../modules/ThemeSelected';

const DATA = [
    {
        id: '01',
        title: 'Créativité',
        link: 'LessonPage',
    },
    {
        id: '02',
        title: 'Sport',
        link: 'LessonPage',
    },
    {
        id: '03',
        title: 'Créativité',
        link: 'LessonPage',
    },
    {
        id: '04',
        title: 'Sport',
        link: 'LessonPage',
    },
    {
        id: '05',
        title: 'Créativité',
        link: 'LessonPage',
    },
    {
        id: '06',
        title: 'Sport',
        link: 'LessonPage',
    },
    {
        id: '07',
        title: 'Créativité',
        link: 'LessonPage',
    },
    {
        id: '08',
        title: 'Sport',
        link: 'LessonPage',
    }
];

const ExercisesPage = ({route, navigation}) => {
    const title = route.params.title
    const color = route.params.color
    return (
        <View style={{flex: 2}}>
            <View style={{flex: 1}}>
                <ThemeSelected navigation={navigation} title={title} color={color}/>
            </View>
            <View style={{flex: 5}}>
                <ItemList navigation={navigation} DATA={DATA} color={color}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
}

export default ExercisesPage
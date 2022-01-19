import React from 'react';
import Header from '../modules/Header';
import Categories from '../modules/Categories'
import NavigBar from '../modules/NavigBar';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';
import ItemList from '../modules/ItemList';

const DATA = [
    {
      id: '1',
      title: 'Statistiques',
    },
    {
      id: '2',
      title: 'Préférences',
    },
    {
      id: '3',
      title: 'Lexique',
    },
    {
      id: '4',
      title: 'Historique',
    },
];

const ProfilePage = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Header/>
            </View>
            <View style={{flex: 5}}>
                <ItemList DATA={DATA}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
}

export default ProfilePage
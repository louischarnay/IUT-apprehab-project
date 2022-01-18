import React from 'react';
import Header from '../modules/Header';
import Categories from '../modules/Categories'
import NavigBar from '../modules/NavigBar';
import ItemList from '../modules/ItemList';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';

const ThemesPage = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 7}}>
                <ItemList navigation={navigation}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
}

export default ThemesPage
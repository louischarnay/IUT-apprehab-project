import React from 'react';
import Header from '../modules/Header';
import Categories from '../modules/Categories'
import NavigBar from '../modules/NavigBar';
import ItemList from '../modules/ItemList';
import FilterPicker from '../modules/FilterPicker';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';

const DATA = [
    {
      id: '1',
      title: 'Premier Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Troisième Item',
    },
    {
      id: '4',
      title: 'Quatrième Item',
    },
    {
      id: '5',
      title: 'Cinquième Item',
    },
    {
      id: '6',
      title: 'Sixième Item',
    },
    {
      id: '7',
      title: 'Septième Item',
    },
    {
      id: '8',
      title: 'Huitième Item',
    },
    {
      id: '9',
      title: 'Neuvième Item',
    },
];

const ThemesPage = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <FilterPicker/>
            </View>
            <View style={{flex: 5}}>
                <ItemList navigation={navigation} DATA={DATA}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
}

export default ThemesPage
import React from 'react';
import Header from '../modules/Header';
import Categories from '../modules/Categories'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';

const MainPage = ({navigation}) => {
    return (
        <Categories navigation={navigation}/>
    );
}

export default MainPage
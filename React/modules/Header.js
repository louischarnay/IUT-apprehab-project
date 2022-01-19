// components/header.js
import React from "react"
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';

const Header = () =>{
    return (
        <View style={{flex: 1}}> 
            <Image style={styles.imgBanner} source={require('../assets/banner.png')}></Image>
        </View>
        )
}

const styles = StyleSheet.create({
    imgBanner: {
        width: Dimensions.get('window').width,
        height: 120,
        justifyContent: 'center',
        alignItems: "center"
    }
})

export default Header
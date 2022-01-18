// components/header.js
import React from "react"
import { StyleSheet, View, Image, ProgressViewIOSComponent } from 'react-native'

const Header = {
    render() {
        return (
            <View style={{flex: 1}}> 
                <Image style={styles.imgBanner} source={require('../assets/banner.png')}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imgBanner: {
        maxWidth: 400,
        justifyContent: 'center',
        alignItems: "center"
    }
})

export default Header
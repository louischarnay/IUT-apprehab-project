import React from "react"
import { View, StyleSheet, Dimensions, Image, StatusBar } from 'react-native';

const Header = () =>{
    return (
        <View style={{flex: 1}}> 
            <Image style={styles.imgBanner} source={require('../assets/pictures/banner.png')}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    imgBanner: {
        marginTop: StatusBar.currentHeight - 10,
        maxWidth: Dimensions.get('window').width,
        maxHeight: Dimensions.get('window').height / 7.5,
        justifyContent: 'center',
        alignItems: "center",
    },
});

export default Header;
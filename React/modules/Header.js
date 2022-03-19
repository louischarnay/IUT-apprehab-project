import React from "react"
import { StyleSheet, Dimensions, Image, StatusBar, SafeAreaView } from 'react-native';

const Header = () =>{
    return (
        <SafeAreaView style={{flex: 1}}> 
            <Image style={styles.imgBanner} source={require('../assets/pictures/banner.png')}></Image>
        </SafeAreaView>
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
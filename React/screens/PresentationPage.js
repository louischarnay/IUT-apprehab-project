import React from 'react';
import NavigBar from '../modules/NavigBar';
import { View, Text, Dimensions, StyleSheet, Image, StatusBar} from 'react-native';

const PresentationPage=({navigation})=>{
    const TextPresentation = global.presentation;
    return(
        <View style={{flex:1}}>
            <View style={{flex: 6}}>
                <Image style={styles.im1} source={require("../assets/pictures/logo-dispositifs-1.png")} />
                <Text style={styles.data}>{TextPresentation}</Text>
                <Image style={styles.im2} source={require("../assets/pictures/logo-dispositifs-2.png")} />
            </View>
            <View style={{flex:1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    )
}

const styleByPlatform = Platform.select({
    ios: {
        data: {
            marginHorizontal: 15,
            fontSize: 20,
            textAlign: 'justify',
          },
          im1: {
            marginTop: StatusBar.currentHeight,
            maxWidth: Dimensions.get('window').width/1.1,
            maxHeight: Dimensions.get('window').height/4.8
          },
    
          im2: {
            marginTop: StatusBar.currentHeight,
            maxWidth: Dimensions.get('window').width,
            maxHeight: Dimensions.get('window').height/10,
          }
    },
    android: {
        data: {
            marginHorizontal: 15,
            fontSize: 20,
            textAlign: 'justify',
        },
        im1: {
            marginTop: StatusBar.currentHeight,
            maxWidth: Dimensions.get('window').width/1.1,
            maxHeight: Dimensions.get('window').height/4.8
        },

        im2: {
            marginTop: StatusBar.currentHeight,
            maxWidth: Dimensions.get('window').width,
            maxHeight: Dimensions.get('window').height/10,
        }
    }
});
  
const styles = StyleSheet.create(styleByPlatform);

export default PresentationPage;
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';

const ex ={
    id:'01',
    source: require('../assets/banner.png')
  }

const ItemChall =(item)=>(
<View style={styles.item} >
<Image
  style={styles.im}
  source={item.source}
/>
</View>
);

const Challenge=({navigation})=>{
    const renderItemChall=({item})=>(
        <ItemChall  source={item.source} nav={navigation}></ItemChall>
    );
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={ex}
                horizontal={true}
                renderItem={renderItemChall}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
      );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        marginTop:22   
      },

    item: {
      flex: 1,
      margin: 2,
      padding: 0,
      width: Dimensions.get('window').width/3-4,
      height: Dimensions.get('window').height/10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    im: {
      width:65,
      height:65
    }
});
export default Challenge;
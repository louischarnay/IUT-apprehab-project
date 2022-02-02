import React from 'react';
import { View,StyleSheet, SafeAreaView, FlatList, Text,Image,Dimensions } from 'react-native'

// Use prebuilt version of RNVI in dist folder

const rate={};
const RowStar=[
    {   
        id:'1',
        color: "#00000"

    },
    {
        id:'2',
        color: "#00000"
    },
    {   
        id:'3',
        color: "#00000"
        
    },
    {   
        id:'4',
        color: "#00000"
        
    },
    {
        id:'5',
        color: "#00000"
        
    }

]

const Item = (item) => (
    <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={rate}>
    <Image
      style={styles.icon}
      source={require('../assets/icones/star-solid.png')}  
    />
  </View>
  );


const GlobalStarRating =()=>{
    const renderItem = ({item}) => (
        <Item rate={item.id} color={item.color} icon={item.icon}/>
      );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data= {RowStar}
                horizontal ={true}
                renderItem= {renderItem}
                 keyExtractor= {item => item.id}
            />
        </SafeAreaView>
      );
}


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            marginTop: 20,
          },
          item: {
            flex: 1,
            width: Dimensions.get('window').width/3.1,
            height: Dimensions.get('window').height/10,
            margin: 2,
            marginTop: 7,
            padding: 0,
            borderRadius: 10,
            justifyContent: 'flex-end',
            alignItems: 'center',
          },
          icon: {
            width:  Dimensions.get('window').width/10,
            height:  Dimensions.get('window').width/10
          },
    });
    
export default GlobalStarRating;



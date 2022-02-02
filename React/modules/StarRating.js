import React from 'react';
import { View,StyleSheet, SafeAreaView, FlatList, Text,Image } from 'react-native'

// Use prebuilt version of RNVI in dist folder

const rate={};
const RowStar=[
    {   
        id:'1',
        icon:require('../assets/icones/star-solid.png'),
        color: "#00000"

    },
    {
        id:'2',
        icon:require('../assets/icones/star-solid.png'),
        color: "#00000"
    },
    {   
        id:'3',
        icon:require('../assets/icones/star-solid.png'),
        color: "#00000"
        
    },
    {   
        id:'4',
        icon:require('../assets/icones/star-solid.png'),
        color: "#00000"
        
    },
    {
        id:'5',
        icon:require('../assets/icones/star-solid.png'),
        color: "#00000"
        
    }

]

const Item = (item) => (
    <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={rate}>
      <Image
        style={styles.icon}
        source={item.icon}  
      />
      <Text>{item.id}</Text>
    </View>
  );


const GlobalStarRating =()=>{
    const renderItem = ({item}) => (
        <Item rate={item.id} color={item.color} icon={item.icon}/>
      );
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={RowStar}
                horizontal={true}
                renderItem={renderItem}
                 keyExtractor={item => item.id}
            />
        </SafeAreaView>
      );
}


    const styles=StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
           // paddingTop: Constants.statusBarHeight,
            backgroundColor: '#ecf0f1',
          },
          tite: {
            fontSize: 24,
            textAlign: 'center',
            color: '#34495e'
          },
          paragraph: {
            margin: 10,
            marginTop: 40,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#34495e',
          }
    });
    
export default GlobalStarRating;




import React from 'react';
import {SafeAreaView, View, StyleSheet, Dimensions, FlatList, Image, Text, Linking, Platform,Pressable,Modal} from 'react-native';

import App from '../modules/Modal';




function printObject(params) {
  switch (params.type){
    case 'Texte':
      return <ItemTexte data={params.data}/>
    case 'Lien':
      return <ItemURL data={params.data}/>
    case 'Image':
      const source = ({uri:'https://apprehab.000webhostapp.com/'+ params.data + '?' + new Date()});
      return <ItemImage data={source}/>
    
  }
}

const ItemTexte = (item) => (
  <View style={styles.itemContentExercise}>
    <Text style={styles.data}>{item.data}</Text>
  </View>
);

const ItemURL = (item) => (
  <View style={styles.itemContentExercise}>
    <Text style={styles.url} onPress={() => Linking.openURL(item.data)}>{item.data}</Text>
  </View>
);

const ItemImage = (item) => (
  <View style={styles.itemContentExercise}>
    <Image source={item.data} style={styles.im}/>
  </View>
)

 function FinExo(params){
  var isExo=false;
if(params.color!=='#88bd28'){
   isExo=true
  }
  else if(params.color=='#88bd28'){
   
  isExo=false
  }

  if(isExo==true)
   return (<Pressable
    style={[styles.button, styles.buttonOpen]}
    onPress={() => setModalVisible(true)}
  >
    <Text style={styles.textStyle}>Finir l'exercice</Text>
    <App/>
  </Pressable>)

   return isExo
}



const Lesson = (params) => {
  
  const renderItem =({item}) => (
    printObject(item)    
  );
  
  
  return(
    <SafeAreaView style={styles.container} >
      
      <FlatList
        data={params.content[0].content}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FinExo color={params.color}/>
        

      
    </SafeAreaView>
    
  );
};

const styleByPlatform = Platform.select({
  ios: {
    container: {
      flex: 1,
    },
    data: {
      marginHorizontal: 15,
      fontSize: 20,
      textAlign: 'justify',
    },
    im: {
      maxWidth: Dimensions.get('window').width,
      height: Dimensions.get('window').height/3
    },
    
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    buttonOpen: {
      marginBottom:22,
      marginTop:50,
      backgroundColor: "#88bd28",
      width: Dimensions.get('window').width/2,
      height: Dimensions.get('window').width/8
    },
    url: {
      color: 'blue',
      marginHorizontal: 15,
      fontSize: 20,
      textAlign: 'justify',
      textDecorationLine: 'underline'
    },
  },
  android: {
    container: {
      flex: 1,
    },
    data: {
      marginHorizontal: 15,
      fontSize: 20,
      textAlign: 'justify',
    },
    im: {
      maxWidth: Dimensions.get('window').width,
      height: Dimensions.get('window').height/3
    },
    
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
  
    url: {
      color: 'blue',
      marginHorizontal: 15,
      fontSize: 20,
      textAlign: 'justify',
      textDecorationLine: 'underline'
    },
  }
});

const styles = StyleSheet.create(styleByPlatform);
  
export default Lesson;
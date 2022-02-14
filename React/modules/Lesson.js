
import React from 'react';
import {SafeAreaView, View, StyleSheet, Dimensions, FlatList, Image, Text, Linking } from 'react-native';
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
   return <App/>

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

const styles = StyleSheet.create({
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

 
});
  
export default Lesson;

import React from 'react';
import {SafeAreaView, View, StyleSheet, Dimensions, FlatList, Image, Text } from 'react-native';
import App from '../modules/Modal';
import Modal from '../modules/Modal';



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


const Lesson = (params) => {
  const renderItem =({item}) => (
    printObject(item)    
  );
  
  return(
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={params.content[0].content}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    
        <App/>
      
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
  centeredView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
  modalView:{
    margin:20,
    backgroundColor:"white",
    borderRadius:20,
    padding:35,
    alignItems:"center",
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5
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

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  modalView: {
    
  }
});
  
export default Lesson;
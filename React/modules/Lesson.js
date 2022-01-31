import React, { useState } from 'react';
import CommentTextInput from '../modules/CommentSection';
import GlobalStarRating from '../modules/StarRating';
import { Alert,SafeAreaView, View, StyleSheet, Dimensions, Pressable, FlatList, Image, Text, Linking, Modal } from 'react-native';



function printObject(params) {
  switch (params.type){
    case 'Texte':
      return <ItemTexte data={params.data}/>
    case 'Image':
      const source = ({uri:'https://apprehab.000webhostapp.com/'+ params.data + '?' + new Date()});
      return <ItemImage data={source}/>
    case 'Lien':
      return <ItemURL data={params.data}/>
  }
}

const ItemTexte = (item) => (
  <View style={styles.itemContentExercise}>
    <Text style={styles.data}>{item.data}</Text>
  </View>
);

const ItemImage = (item) => (
  <View style={styles.itemContentExercise}>
    <Image source={item.data} style={styles.im}/>
  </View>
)

const ItemURL = (item) => (
  <View style={styles.itemContentExercise}>
    <Text style={styles.url} onPress={() => Linking.openURL(item.data)}>{item.data}</Text>
  </View>
);

/*
const ItemBouton = () => (
/*const ItemNumActivite = (item)=>(
  <View style={styles.itemContentExercise}>
    <Text style={styles.data}>Cette semaine, j'ai fait {item.data} activités</Text>
  </View>
)*/

const ItemBouton = () => {
  const [modalVisible,setModalVisible] = useState(false);
  return(
  <View style={styles.centeredView}>
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={()=>{
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Exercice Fini !</Text>
          <View style={{flex:1}}>
            <GlobalStarRating/>
          </View>
          <View style={{flew:4}}>
            <CommentTextInput/>
          </View>
          <Pressable
            style={[styles.button,styles.buttonClose]}
            onPress={()=>setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Terminer</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <Pressable 
      style={[styles.button,styles.buttonOpen]}
      onPress={()=>setModalVisible(true)}
      >
      <Text style={styles.textStyle}>Finir l'exercice</Text>
    </Pressable>
  </View>
  )
}

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
      <ItemBouton/>
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
  url: {
    color: 'blue',
    marginHorizontal: 15,
    fontSize: 20,
    textAlign: 'justify',
    textDecorationLine: 'underline'
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

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  buttonOpen: {
    backgroundColor: "#F194FF",
  },

});
  
export default Lesson;
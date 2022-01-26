import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions,  FlatList, Image, Text } from 'react-native';
import EndLesson from '../screens/EndLesson';

function printObject(params) {
  switch (params.type){
    case 'Texte':
      return <ItemTexte data={params.data}/>
    case 'Image':
      const source = ({uri:'https://apprehab.000webhostapp.com/'+ params.data + '?' + new Date()});
      return <ItemImage data={source}/>
    case 'Bouton':
      return <ItemBouton data={params.data}/>
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

const ItemBouton =(item) =>(
  <Pressable 
  style={[styles.button,styles.buttonOpen]}
  onPress={()=>setModalVisible(true)}
  >
  <Text style={styles.textStyle}>Finir l'exercice</Text>
</Pressable>
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
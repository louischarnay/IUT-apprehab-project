import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions,  FlatList, Image, Text } from 'react-native';

function printObject(params) {
  switch (params.type){
    case 'Texte':
      return <ItemTexte data={params.data}/>
    case 'Image':
      const source = ({uri:'https://apprehab.000webhostapp.com/'+ params.data});
      return <ItemImage data={source}/>
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
    maxHeight: Dimensions.get('window').height/3
  }
});
  
export default Lesson;
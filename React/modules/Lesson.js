import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

var DATA = [];
var cpt1 = 0;
var cpt2 = 0;

function fillDATA(params){
  DATA.length = 0
  for (cpt1 = 0; cpt1 < params.length; cpt1++){
    for (cpt2 = 0; cpt2 < params[cpt1].content.length; cpt2++){
      DATA[params[cpt1].content.length] = {
        id: cpt2,
        desc: params[cpt1].content[cpt2],
      }
      DATA[0] = DATA[1]
    }
    for (cpt2 = 1; cpt2 < params[cpt1].content.length; cpt2++){
      DATA[cpt2-1] = DATA[cpt2]
    }
    DATA.length--
  }
}

const Item = (item) => (
  <View style={styles.itemContentExercise}>
    <Text styleDesc={styles.desc}>{item.desc}</Text>
  </View>
);

const Lesson = (params) => {
  fillDATA(params.content)
  const renderItem =({item})=>(
    <Item desc={item.desc}/>
    );
    return(
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 5,
    },
    desc:{
        fontSize: 20,
        color:"black"
    },
  });
  
  export default Lesson;
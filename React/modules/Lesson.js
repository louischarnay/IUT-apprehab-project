import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const ContentExercise = [
    {
      id:'01',  
      desc:"An exercise like no other !"
    }
]

const Item = (item) => (
  <View style={styles.itemContentExercise}>
    <Text styleDesc={styles.desc}>{item.desc}</Text>
  </View>
);

const Lesson = ({navigation}) => {
    const renderItem =({item})=>(
    <Item link ={item.link} desc={item.desc}nav={navigation}/>
    );
    return(
        <SafeAreaView style={styles.container}>
          <FlatList
            data={ContentExercise}
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
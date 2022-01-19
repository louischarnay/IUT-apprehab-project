import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


const TitleExercise = [
    {
        title: "Title"
    }
]

const ContentExercise = [
    {
        
        link:"a link to the blog",
        desc:"An exercise like no other !"
    }
]

const ItemTitleExercise =(item)=>(
    <View style={styles.itemTitleExercise} onStartShouldSetResponder={() => item.nav.navigate('ExerciseSelectionPage')}>
    <Text style={styles.title}>{item.title}</Text>
    </View>
    );

const ItemContentExercise =(item)=>(
    <View style={styles.itemContentExercise}>
<Text styleLink={styles.link} styleDesc={styles.desc}>{item.link,item.desc}</Text>
</View>
);

const Exercise =({navigation})=>{
    const renderItemTitleExercise =({item})=>(
    <ItemTitleExercise title = {item.title} nav={navigation}/>
    );
    const renderItemContentExercise =({item})=>(
    <ItemContentExercise link ={item.link} desc={item.desc}nav={navigation}/>
    );
    return(
        <SafeAreaView style={styles.container}>
          <FlatList
            data={TitleExercise}
            renderItem={renderItemTitleExercise}
            keyExtractor={item => item.id}
          />
          <FlatList
          data={ContentExercise}
          renderItem={renderItemContentExercise}
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

    link:{
        color:"blue",
        style:"underlined"
    },

    desc:{
        fontSize: 20,
        color:"black"
    },

    title: {
      fontSize: 25,
      fontWeight: 'bold',
    },
  });
  
  export default Exercise;
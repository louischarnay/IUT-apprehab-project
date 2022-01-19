import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import ItemList from '../modules/ItemList';


const Theme =[{
  title = 'Thème'  
}]

const ThemedExercise=[
    {
        id: '1',
        title: 'ExoType1'
    },
    {
        id: '2',
        title: 'ExoType2'
    },
    {
        id: '3',
        title: 'ExoType3'
    }


];

const ItemTheme =({title})=>(
<View style={styles.item}>
<Text style={styles.title}>{title}</Text>
</View>
);

const ItemThemedExercise =({title})=>(
<View style={styles.item}>
<Text style={styles.title}>{title}</Text>
</View>
);

const ExerciseSelection =()=>{
    const renderItemTheme=({item})=>(
      <ItemTheme title={item.title}/>      
    );
    
    const renderItemThemedExercise=({item})=>(
        <ItemThemedExercise title={item.title}/>
    );
    return(
<SafeAreaView style={styles.container}>
      <FlatList
        data={Theme}
        renderItem={renderItemTheme}
        keyExtractor={item => item.id}
      />
      <FlatList
        data={ThemedExercise}
        renderItem={renderItemThemedExercise}
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
    },
    title: {
      fontSize: 32,
    },
  });
  export default ExerciseSelection;
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import ItemList from '../modules/ItemList';


const Theme =[{
  title: 'Thème'  
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

const ItemTheme =(item)=>(
<View style={styles.itemTheme} onStartShouldSetResponder={() => item.nav.navigate('ThemesPage')}>
<Text style={styles.title}>{item.title}</Text>
</View>
);

const ItemThemedExercise =({title})=>(
<View style={styles.itemThemedExercise}>
<Text style={styles.title}>{title}</Text>
</View>
);

const ExerciseSelection =({navigation})=>{
    const renderItemTheme=({item})=>(
      <ItemTheme title={item.title} nav={navigation} />      
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
    itemTheme: {
      backgroundColor: '#f9c2ff',
      borderColor:"black",
      borderStyle:'solid',
      borderWidth:3,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16
     
    },
    itemThemedExercise: {
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
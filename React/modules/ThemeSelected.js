import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const Theme =[{
  id: '01',
  title: 'Thème',
}]

const Item =(item) =>(
  <View style={styles.itemTheme} onStartShouldSetResponder={() => item.nav.goBack()}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const ThemeSelected =({navigation})=>{
    const renderItem=({item})=>(
      <Item title={item.title} nav={navigation} />      
    );
    
    return(
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Theme}
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
    itemTheme: {
      backgroundColor: '#f9c2ff',
      borderColor:"black",
      borderStyle:'solid',
      borderWidth:4,
      padding: 20,
      borderRadius: 5,     
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

  export default ThemeSelected;
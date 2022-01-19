import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const Item = (item) => (
  <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={() => item.nav.navigate('ExercisesPage', {title:item.title, color:item.color})}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const ItemList = (props) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} color={props.color} nav={props.navigation}/>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.DATA}
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ItemList;
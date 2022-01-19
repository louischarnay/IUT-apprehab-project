import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const Item = (item) => (
  <View style={styles.item} onStartShouldSetResponder={() => item.nav.navigate('ExercisesPage')}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);


const ItemList = (props) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} nav={props.navigation}/>
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default ItemList;
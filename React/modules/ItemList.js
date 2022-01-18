import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Premier Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Troisième Item',
  },
  {
    id: '4',
    title: 'Quatrième Item',
  },
  {
    id: '5',
    title: 'Cinquième Item',
  },
  {
    id: '6',
    title: 'Sixième Item',
  },
  {
    id: '7',
    title: 'Septième Item',
  },
  {
    id: '8',
    title: 'Huitième Item',
  },
  {
    id: '9',
    title: 'Neuvième Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Lessons = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
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
  },
  title: {
    fontSize: 32,
  },
});

export default Lessons;
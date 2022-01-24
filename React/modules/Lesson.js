import React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, Text } from 'react-native';

const Item = (item) => (
  <View style={styles.itemContentExercise}>
    <Text style={styles.data}>{item.data}</Text>
  </View>
);

const Lesson = (params) => {
  const renderItem =({item})=>(
    <Item data={item.data}/>
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
});
  
export default Lesson;
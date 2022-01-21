import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

const imageUrl="https://apprehab.000webhostapp.com/database/challenge/challenge.jpg";

const DATA = [
  {
    id:'01',
    source: {uri:imageUrl}
  }
]

const Item = (item) =>(
  <View style={styles.item} >
    <Image
      style={styles.im}
      source={item.source}
    />
  </View>
);

const Challenge = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item source={item.source} nav={navigation}></Item>
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
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    marginTop: 22,
  },
  item: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderRadius: 10,
    marginTop: 22,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  
});

export default Challenge;
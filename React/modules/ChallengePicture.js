import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

const DATA = [
  {
    id:'01',
    source: ({uri:'https://apprehab.000webhostapp.com/database/challenge/challenge.jpg'})
  }
]

const source = {uri:'https://apprehab.000webhostapp.com/database/challenge/challenge.jpg'+ '?' + new Date()}

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
    <Image source={source} nav={navigation}  style={{width: 500, height: 500}}/>
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
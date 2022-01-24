import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, FlatList, Image } from 'react-native';

const DATA = [
  {
    id: '01',
    source: ({uri:'https://apprehab.000webhostapp.com/database/challenge/challenge.jpg'}),
  },
];

const source = {uri:'https://apprehab.000webhostapp.com/database/challenge/challenge.jpg'+ '?' + new Date()};

const ChallengePicture = () => {
  const renderItem = ({item}) => (
    <Image source={source} style={styles.im}/>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
  im: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-230,
  },
});

export default ChallengePicture;
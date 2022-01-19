import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';

const ex = [
  {
    id:'01',
    source: require('../assets/affiche.png')
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
        data={ex}
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
      margin: 2,
      padding: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      borderRadius: 10,
      marginTop: 22,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
});
export default Challenge;
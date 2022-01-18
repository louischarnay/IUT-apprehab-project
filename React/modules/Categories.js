import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';
import sqlite from 'react-native-sqlite-storage';

const db = sqlite.openDatabase({
  name: 'databaseSQLite',
  location: 'databaseSQLite/databaseSQLite.db'
  },
  () => {},
  error => { console.log(error) }
);

const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql("CREATE TABLE test(id integer primary key, zebi text);");
    console.log("zebi");
  })
}

const ROW_1 = [
  {
    id: '01',
    title: 'Créativité',
    color: '#f9c2ff',
    icon: require('../icones/creativite.png')
  },
  {
    id: '02',
    title: 'Sport',
    color: '#f9c2ff',
    icon: require('../icones/sport.png')
  }
];

const ROW_2 = [
    {
      id: '03',
      title: 'Cognition',
      color: '#f9c2ff',
      icon: require('../icones/cognition.png')
    },
    {
      id: '04',
      title: 'Psycho-éducation',
      color: '#f9c2ff',
      icon: require('../icones/psycho-education.png')
    }
];


const ROW_3 = [
    {
      id: '05',
      title: 'Anxiété',
      color: '#f9c2ff',
      icon: require('../icones/anxiete.png')
    },
    {
      id: '06',
      title: 'Culture',
      color: '#f9c2ff',
      icon: require('../icones/culture.png')
    }
];

const Item = (item) => (
  <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={() => item.nav.navigate('Lessons')}>
      <Image
        style={styles.icon}
        source={item.icon}  
      />
      <Text style={styles.title}>{item.title}</Text>
  </View>
);

const Categories = ({navigation}) => {
  createTable();
  const renderItem = ({ item }) => (
    <Item title={item.title} icon={item.icon} color={item.color} nav={navigation}/>
  );

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={ROW_1}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        <FlatList
            data={ROW_2}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        <FlatList
            data={ROW_3}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Dimensions.get('window').width/4,    
  },
  item: {
    flex: 1,
    margin: 20,
    padding: 0,
    width: Dimensions.get('window').width/2 - 40,
    height: Dimensions.get('window').width/2 - 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  icon: {
    width: 100,
    height: 100,
    margin: 10
  }
});

export default Categories;
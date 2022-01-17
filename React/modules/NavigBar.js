import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';


const ROW = [
    {
      id: '01',
      title: 'Challenge',
      color: '#f9c2ff',
      
    },
    {
      id: '02',
      title: 'Accueil',
      color: '#f9c2ff',
      
    },
    {
        id: '03',
        title:'Profil',
        color: '#f9c2ff'

    }
  ];

  const ItemChallenge = (item) => (
    <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={() => item.nav.navigate('Challenge')}>
        <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  const ItemAccueil = (item) => (
    <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={() => item.nav.navigate('Accueil')}>
        <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  const ItemProfil = (item) => (
    <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={() => item.nav.navigate('Profil')}>
        <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  const NavigBar= ({navigation}) => {
    const renderItemChallenge = ({ item }) => (
      <ItemChallenge title={item.title} color={item.color} nav={navigation}/>
      
    );
    const renderItemAccueil = ({ item }) => (
        <ItemAccueil title={item.title} color={item.color} nav={navigation}/>
        
    );
    const renderItemProfil = ({ item }) => (
        <ItemProfil title={item.title} color={item.color} nav={navigation}/>
        
    );
  
    return (
      <SafeAreaView style={styles.container}>
          <FlatList
              data={ROW_1}
              horizontal={true}
              renderItem={renderItemChallenge,renderItemAccueil,renderItemProfil}
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
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold'
    }
});
export default NavigBar;

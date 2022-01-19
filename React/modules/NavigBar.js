import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';


const ROW = [
    {
      id: '01',
      title: 'Challenge',

      icon: require('../icones/challenge.png'),
      link: 'ChallengesPage'
    },
    {
      id: '02',
      title: 'Accueil',

      icon: require('../icones/accueil.png'),
      link: 'MainPage'
    },
    {
      id: '03',
      title:'Profil',
      icon: require('../icones/profil.png'),
      link: 'Profil'

    }
  ];

  const Item = (item) => (

    <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={() => item.nav.navigate(item.link)}>
        <Image
          style={styles.icon}
          source={item.icon}
        />
    </View>
  );

  const NavigBar= ({navigation}) => {
    const renderItem = ({ item }) => (
      <Item icon={item.icon} color={item.color} nav={navigation} link={item.link}/>
    );

  
    return (
      <SafeAreaView style={styles.container}>
          <FlatList
              data={ROW}
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



      backgroundColor: '#f9c2ff',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      marginTop: 22,

    },
    item: {
      flex: 1,
      margin: 2,
      padding: 0,
      width: Dimensions.get('window').width/3.1,
      height: Dimensions.get('window').height/10,
      borderRadius: 10,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    icon: {

      width:  Dimensions.get('window').width/5.8,
      height:  Dimensions.get('window').width/5.8

    }
});

export default NavigBar;
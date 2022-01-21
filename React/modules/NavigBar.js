import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

const ROW = [
    {
      id: '01',
      title: 'Challenge',
      icon: require('../assets/icones/challenge.png'),
      link: 'Challenge'
    },
    {
      id: '02',
      title: 'Accueil',
      icon: require('../assets/icones/accueil.png'),
      link: 'MainPage'
    },
    {
      id: '03',
      title:'Profile',
      icon: require('../assets/icones/profil.png'),
      link: 'Profile'
    }
];

function navigation(params){
  
}

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
    backgroundColor: mainColor,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 20,
  },
  item: {
    flex: 1,
    width: Dimensions.get('window').width/3.1,
    height: Dimensions.get('window').height/10,
    margin: 2,
    marginTop: 7,
    padding: 0,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    width:  Dimensions.get('window').width/5.8,
    height:  Dimensions.get('window').width/5.8
  },
});

export default NavigBar;
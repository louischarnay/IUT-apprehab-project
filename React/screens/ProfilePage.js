import React from 'react';
import Header from '../modules/Header';
import ItemList from '../modules/ItemList';
import NavigBar from '../modules/NavigBar';
import { View } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Statistiques',
    link: null,
  },
  {
    id: '2',
    title: 'Préférences',
    link: null,
  },
  {
    id: '3',
    title: 'Lexique',
    link: 'LexiquePage',
  },
  {
    id: '4',
    title: 'Historique',
    link: null,
  },
];

const ProfilePage = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header/>
      </View>
      <View style={{flex: 5}}>
        <ItemList navigation={navigation} DATA={DATA} color= {mainColor}/>
      </View>
      <View style={{flex: 1}}>
        <NavigBar navigation={navigation}/>
      </View>
    </View>
  );
}

export default ProfilePage
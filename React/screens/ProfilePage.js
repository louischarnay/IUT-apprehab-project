import React from 'react';
import Header from '../modules/Header';
import ItemList from '../modules/ItemList';
import NavigBar from '../modules/NavigBar';
import { View } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Statistiques',
  },
  {
    id: '2',
    title: 'Préférences',
  },
  {
    id: '3',
    title: 'Lexique',
  },
  {
    id: '4',
    title: 'Historique',
  },
];

const ProfilePage = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header/>
      </View>
      <View style={{flex: 5}}>
        <ItemList DATA={DATA} color='#f9c2ff'/>
      </View>
      <View style={{flex: 1}}>
        <NavigBar navigation={navigation}/>
      </View>
    </View>
  );
}

export default ProfilePage
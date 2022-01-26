import React from 'react';
import { View } from 'react-native';
import Header from '../modules/Header';
import ItemList from '../modules/ItemList';
import NavigBar from '../modules/NavigBar';

const DATA = [
  {
    id: '1',
    title: 'Statistiques',
    link: 'StatistiquesPage',
  },
  {
    id: '2',
    title: 'Préférences',
    link: 'StatistiquesPage',
  },
  {
    id: '3',
    title: 'Lexique',
    link: 'LexiquePage',
  },
  {
    id: '4',
    title: 'Historique',
    link: 'StatistiquesPage',
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
};

export default ProfilePage;
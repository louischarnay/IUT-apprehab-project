import React from 'react';
import { View } from 'react-native';
import ItemList from '../modules/ItemList';
import NavigBar from '../modules/NavigBar';
import Search from '../modules/Search';

const ThemesPage = ({route, navigation}) => {
  const DATA = route.params;
  const color = route.params.color;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Search color={color}/>
      </View>
      <View style={{flex: 5}}>
        <ItemList navigation={navigation} DATA={DATA.DATA.DATA} color={color}/>
      </View>
      <View style={{flex: 1}}>
        <NavigBar navigation={navigation}/>
      </View>
    </View>
  );
};

export default ThemesPage;
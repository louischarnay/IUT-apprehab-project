import React from 'react';
import ItemList from '../modules/ItemList';
import NavigBar from '../modules/NavigBar';
import FilterPicker from '../modules/FilterPicker';
import { View } from 'react-native';

const ThemesPage = ({route, navigation}) => {
  const DATA = route.params
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FilterPicker/>
      </View>
      <View style={{flex: 5}}>
        <ItemList navigation={navigation} DATA={DATA.DATA.DATA}/>
      </View>
      <View style={{flex: 1}}>
        <NavigBar navigation={navigation}/>
      </View>
    </View>
  );
}

export default ThemesPage
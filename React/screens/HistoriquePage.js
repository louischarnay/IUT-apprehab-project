import React from 'react';
import ItemList from '../modules/ItemList';
import NavigBar from '../modules/NavigBar';
import { View } from 'react-native';
import ClearHistorique from '../modules/ClearHistorique';

const HistoriquePage = ({route, navigation}) => {
  const DATA = route.params;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 5}}>
        <ItemList navigation={navigation} DATA={DATA.DATA.DATA} color={null}/>
      </View>
      <View style={{flex: 1}}>
        <ClearHistorique/>
      </View>
      <View style={{flex: 1}}>
        <NavigBar navigation={navigation}/>
      </View>
    </View>
  );
};

export default HistoriquePage;
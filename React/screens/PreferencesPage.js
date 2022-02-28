import React from 'react';
import NavigBar from '../modules/NavigBar';
import ClearHistorique from '../modules/ClearHistorique'
import ControlVibrations from '../modules/ControlVibrations'
import { View } from 'react-native';


const PreferencesPage = ({route, navigation}) => {
  const DATA = route.params;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 6}}>
        <ClearHistorique/>
        
      </View>
      <View style={{flex: 1}}>
        <NavigBar navigation={navigation}/>
      </View>
    </View>
  );
};

export default PreferencesPage;
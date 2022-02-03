import React from 'react';
import { View,Text } from 'react-native';
import CategoriePref from '../modules/CategoriePref';
import NumActivite from '../modules/NumActivites'
import NavigBar from '../modules/NavigBar';


const StatistiquesPage = ({navigation}) => {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 6}}>
            <CategoriePref title={global.catPref}/>
            <NumActivite/>

        </View>
        <View style={{flex: 1}}>
          <NavigBar navigation={navigation} route={'ProfilePage'}/>
        </View>
      </View>
    );
  };
  
  export default StatistiquesPage;
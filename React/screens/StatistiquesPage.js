import React from 'react';
import { View } from 'react-native';
import NavigBar from '../modules/NavigBar';

const StatistiquesPage = ({navigation}) => {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 6, backgroundColor: 'orange'}}>

        </View>
        <View style={{flex: 1}}>
          <NavigBar navigation={navigation}/>
        </View>
      </View>
    );
  };
  
  export default StatistiquesPage;
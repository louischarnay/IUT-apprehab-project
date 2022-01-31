import React from 'react';
import { View,Text } from 'react-native';
import CategoriePref from '../modules/CategoriePref';
import NavigBar from '../modules/NavigBar';


const semaine="Cette semaine, j'ai fait ";
const activites=" activités";
const ItemNumActivite = ()=>(
  <View>
    <Text> {semaine+global.amountExerciceDoneMonth+activites}</Text>
  </View>
)


const StatistiquesPage = ({navigation}) => {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 6}}>
            <CategoriePref title={global.catPref}/>
            <ItemNumActivite/>
        </View>
        <View style={{flex: 1}}>
          <NavigBar navigation={navigation} route={'ProfilePage'}/>
        </View>
      </View>
    );
  };
  
  export default StatistiquesPage;
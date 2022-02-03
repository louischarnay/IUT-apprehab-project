import React from 'react';
import { View,Text } from 'react-native';
import CategoriePref from '../modules/CategoriePref';
import NumActivite from '../modules/NumActivites'
import NavigBar from '../modules/NavigBar';

<<<<<<< HEAD
=======

const semaine="Cette semaine, j'ai fait ";
const activites=" activités";
const ItemNumActivite = ()=>(
  <View>
    <Text> {semaine+global.amountExerciceDoneMonth+activites}</Text>
  </View>
)


>>>>>>> Rémy
const StatistiquesPage = ({navigation}) => {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 6}}>
            <CategoriePref title={global.catPref}/>
<<<<<<< HEAD
            <NumActivite/>
=======
            <ItemNumActivite/>
>>>>>>> Rémy
        </View>
        <View style={{flex: 1}}>
          <NavigBar navigation={navigation} route={'ProfilePage'}/>
        </View>
      </View>
    );
  };
  
  export default StatistiquesPage;
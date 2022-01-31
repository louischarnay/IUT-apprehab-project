import React from 'react';
import {AsyncStorage, View} from 'react-native';
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
    link: 'HistoriquePage',
  },
];

async function setCatPref(){
  var catPref = Number(await AsyncStorage.getItem("nbTimesCréativité"))
  global.catPref = "Créativité"
  var tmp = Number(await AsyncStorage.getItem("nbTimesSport"))
  if(tmp > catPref) {
    global.catPref = "Sport"
    catPref = tmp
  }
  tmp = Number(await AsyncStorage.getItem("nbTimesCognition"))
  if(tmp > catPref) {
    global.catPref = "Cognition"
    catPref = tmp
  }
  tmp = Number(await AsyncStorage.getItem("nbTimesPsycho-éducation"))
  if(tmp > catPref) {
    global.catPref = "Psycho-éducation"
    catPref = tmp
  }
  tmp = Number(await AsyncStorage.getItem("nbTimesRelaxation"))
  if(tmp > catPref) {
    global.catPref = "Relaxation"
    catPref = tmp
  }
  tmp = Number(await AsyncStorage.getItem("nbTimesCulture & Infos"))
  if(tmp > catPref) {
    global.catPref = "Culture & Infos"
  }
}

async function getNumberActivities(){
  let tmp = await AsyncStorage.getItem("AmountExercicesDoneMonth")
  global.amountExerciceDoneMonth = tmp
}

const ProfilePage = ({navigation}) => {
  setCatPref()
  getNumberActivities()
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
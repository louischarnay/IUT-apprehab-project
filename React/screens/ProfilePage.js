import React from 'react';
import {View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

async function setCatPref(){
  let catPref
  try {
    catPref = Number(await AsyncStorage.getItem("nbTimesCréativité"))
  }catch (e) {}
  global.catPref = "Créativité"
  let tmp
  try {
    tmp = Number(await AsyncStorage.getItem("nbTimesSport"))
  }catch (e) {}
  if(tmp > catPref) {
    global.catPref = "Sport"
    catPref = tmp
  }
  try {
    tmp = Number(await AsyncStorage.getItem("nbTimesCognition"))
  }catch (e) {}
  if(tmp > catPref) {
    global.catPref = "Cognition"
    catPref = tmp
  }
  try {
    tmp = Number(await AsyncStorage.getItem("nbTimesPsycho-éducation"))
  }catch (e){}
  if(tmp > catPref) {
    global.catPref = "Psycho-éducation"
    catPref = tmp
  }
  try {
    tmp = Number(await AsyncStorage.getItem("nbTimesRelaxation"))
  }catch (e) {}
  if(tmp > catPref) {
    global.catPref = "Relaxation"
    catPref = tmp
  }
  try {
    tmp = Number(await AsyncStorage.getItem("nbTimesCulture & Infos"))
  } catch (e) {}
  if(tmp > catPref) {
    global.catPref = "Culture & Infos"
  }
}

async function getNumberActivities(){
  let tmp
  try {
    tmp = await AsyncStorage.getItem("AmountExercicesDoneMonth")
  } catch (e) {}
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
import React from 'react';
import {AsyncStorage, Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const ROW_1 = [
  {
    id: '01',
    title: 'Créativité',
    color: '#ac569d',
    icon: require('../assets/icones/creativite.png')
  },
  {
    id: '02',
    title: 'Sport',
    color: '#f39205',
    icon: require('../assets/icones/sport.png')
  },
];

const ROW_2 = [
  {
    id: '03',
    title: 'Cognition',
    color: '#ece652',
    icon: require('../assets/icones/cognition.png')
  },
  {
    id: '04',
    title: 'Psycho-éducation',
    color: '#4bc2ee',
    icon: require('../assets/icones/psycho-education.png')
  },
];

const ROW_3 = [
  {
    id: '05',
    title: 'Relaxation',
    color: '#99cda2',
    icon: require('../assets/icones/relaxation.png')
  },
  {
    id: '06',
    title: 'Culture & Infos',
    color: '#dd0712',
    icon: require('../assets/icones/culture.png')
  },
];

async function navigation(params){
  var idCategorie = -1;
  var cpt = 0;
  while (idCategorie === -1){
    var categorie = JSON.parse( await AsyncStorage.getItem('categorie' + cpt));
    if(params.title === categorie.nomCategorie){
      idCategorie = categorie.idCategorie;
    }
    cpt++;
  }
  var allThemes = JSON.parse( await AsyncStorage.getItem('allThemes'));
  var matchThemes = [];
  for (cpt = 0; cpt < allThemes.length; cpt++){
    if(allThemes[cpt].categorieId === idCategorie){
      matchThemes[matchThemes.length] = allThemes[cpt];
    }
  }
  var DATA = [];
  for(cpt = 0; cpt < matchThemes.length; cpt ++){
    DATA[DATA.length] = {
      id: matchThemes[cpt].idTheme,
      title: matchThemes[cpt].nomTheme,
      link: 'LessonPage'
    };
  }
  params.nav.navigate('ThemesPage', {DATA:{DATA}, color:params.color})
};

const Item = (item) => (
  <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={() => navigation(item)}>
    <Image
      style={styles.icon}
      source={item.icon}  
    />
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const Categories = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} icon={item.icon} color={item.color} nav={navigation}/>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ROW_1}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FlatList
        data={ROW_2}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FlatList
        data={ROW_3}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    width: Dimensions.get('window').height/4.7,
    height: Dimensions.get('window').height/4.7,
    margin: Dimensions.get('window').width/25,
    padding: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Dimensions.get('window').width/24,
    fontWeight: 'bold',
    color: 'white'
  },
  icon: {
    width: Dimensions.get('window').width/2.5,
    height: Dimensions.get('window').width/2.5,
    margin: -20,
  },
});

export default Categories;
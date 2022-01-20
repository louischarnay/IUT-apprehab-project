import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Dimensions, Image } from 'react-native';

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
  }
];

const ROW_2 = [
  {
    id: '03',
    title: 'Cognition',
    color: '#bce652',
    icon: require('../assets/icones/cognition.png')
  },
  {
    id: '04',
    title: 'Psycho-éducation',
    color: '#4bc2ee',
    icon: require('../assets/icones/psycho-education.png')
  }
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
  }
];

function navigation(params){
  if (params.title == 'Créativité'){
    const DATA = [
      {
        id: '1',
        title: 'Pliage',
        link: 'ExercisesPage',
      },
      {
        id: '2',
        title: 'Collage',
        link: 'ExercisesPage',
      },
      {
        id: '3',
        title: 'Land\'Art',
        link: 'ExercisesPage',
      },
      {
        id: '4',
        title: 'Ecriture',
        link: 'ExercisesPage',
      },
    ];
    params.nav.navigate('ThemesPage', {DATA:{DATA}, color:params.color})
  }
  if (params.title == 'Sport'){
    const DATA = [
      {
        id: '1',
        title: 'Renforcements',
        link: 'ExercisesPage',
      },
      {
        id: '2',
        title: 'Etirements',
        link: 'ExercisesPage',
      },
      {
        id: '3',
        title: 'Liens/Videos utiles',
        link: 'ExercisesPage',
      },
      {
        id: '4',
        title: 'Activités',
        link: 'ExercisesPage',
      },
    ];
    params.nav.navigate('ThemesPage', {DATA:{DATA}, color:params.color})
  }
  if (params.title == 'Cognition'){
    const DATA = [
      {
        id: '1',
        title: 'Jeux',
        link: 'ExercisesPage',
      },
      {
        id: '2',
        title: 'Livrets',
        link: 'ExercisesPage',
      },
      {
        id: '3',
        title: 'Exercices',
        link: 'ExercisesPage',
      },
    ];
    params.nav.navigate('ThemesPage', {DATA:{DATA}, color:params.color})
  }
  if (params.title == 'Psycho-éducation'){
    const DATA = [
      {
        id: '1',
        title: 'Traitements & Symptomes',
        link: 'ExercisesPage',
      },
      {
        id: '2',
        title: 'Autonomie',
        link: 'ExercisesPage',
      },
      {
        id: '3',
        title: 'Temoignages',
        link: 'ExercisesPage',
      },
    ];
    params.nav.navigate('ThemesPage', {DATA:{DATA}, color:params.color})
  }
  if (params.title == 'Relaxation'){
    const DATA = [
      {
        id: '1',
        title: 'Applications',
        link: 'ExercisesPage',
      },
      {
        id: '2',
        title: 'Videos',
        link: 'ExercisesPage',
      },
    ];
    params.nav.navigate('ThemesPage', {DATA:{DATA}, color:params.color})
  }
  if (params.title == 'Culture & Infos'){
    const DATA = [
      {
        id: '1',
        title: 'Réseau',
        link: 'ExercisesPage',
      },
      {
        id: '2',
        title: 'Qui sommes nous ?',
        link: 'ExercisesPage',
      },
    ];
    params.nav.navigate('ThemesPage', {DATA:{DATA}, color:params.color})
  }
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
import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import ItemList from '../modules/ItemList';
import NavigBar from '../modules/NavigBar';

const ThemesPage = ({route, navigation}) => {
  const DATA = route.params;
  const color = route.params.color;

  return (
    <View style={{flex: 1}}>
      <View style={styles.main_container}>
          <TextInput style={styles.textinput}/>
          <Button style={styles.button} color={color} title='Rechercher' onPress={() => {}}/>
      </View>
      <View style={{flex: 5}}>
        <ItemList navigation={navigation} DATA={DATA.DATA.DATA} color={color}/>
      </View>
      <View style={{flex: 1}}>
        <NavigBar navigation={navigation}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    button: {
        marginLeft: 5,
        marginRight: 5,
    }
})

export default ThemesPage;
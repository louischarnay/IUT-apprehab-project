import React from 'react';
import ItemList from '../modules/ItemList';
import NavigBar from '../modules/NavigBar';
import { View, StyleSheet, Button, TextInput, StatusBar, Platform} from 'react-native';

const LexiquePage = ({route, navigation}) => {
  const DATA = route.params;
  const color = route.params.color;
  return (
    <View style={{flex: 1}}>
      <View style={styles.main_container}>
          <TextInput style={styles.textinput} placeholder='Trouver un mot'/>
          <Button color={color} title='Rechercher' onPress={() => {}}/>
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

const styleByPlatform = Platform.select({
  ios: {
    main_container: {
      flex: 1,
      marginTop: StatusBar.currentHeight + 40
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderWidth: 1,
        paddingLeft: 5
    },
  },
  android: {
    main_container: {
      flex: 1,
      marginTop: StatusBar.currentHeight
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderWidth: 1,
        paddingLeft: 5
    },
  }
});

const styles = StyleSheet.create(styleByPlatform)

export default LexiquePage;
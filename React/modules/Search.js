import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const Search = (params) => {
    return (
        <View style={styles.main_container}>
          <TextInput style={styles.textinput}/>
          <Button style={styles.button} color={params.color} title='Rechercher' onPress={() => {}}/>
        </View>
    )
}

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

export default Search;
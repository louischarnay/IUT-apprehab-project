import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Item = (item) =>(
    <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={() => item.nav.goBack()}>
      <Text style={styles.txt}>Ma catégorie préférée :</Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

const CategoriePref = (props) => {
    const renderItem = () => (
        <Item title={props.title}/>      
    );

    return(
        renderItem()
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 30,
      borderWidth: 3,
      borderRadius: 10,
      justifyContent: 'center',
      textAlign: 'center',
      marginHorizontal: 10,
      marginVertical: 10
    },
    txt: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      },
  });

export default CategoriePref;
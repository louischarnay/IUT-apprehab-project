import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const NumActivites = () => {
    return (
        <View style={styles.item} backgroundColor={mainColor}>
            <Text style={styles.title}>Cette semaine j'ai fait {global.amountExerciceDoneMonth} activités.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 30,
      borderRadius: 10,
      justifyContent: 'center',
      textAlign: 'center',
      marginHorizontal: 10,
      marginVertical: 10
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
    },
});

export default NumActivites;
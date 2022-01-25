import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native';

const source = {uri:'https://apprehab.000webhostapp.com/database/challenge/challenge.jpg'+ '?' + new Date()};

const ChallengePicture = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={source} style={styles.im}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 10,
  },
  im: {
    maxWidth: Dimensions.get('window').width,
    height: Dimensions.get('window').height-200,
  },
});

export default ChallengePicture;
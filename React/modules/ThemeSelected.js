import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const Item = (item) =>(
  <View style={styles.itemTheme} backgroundColor={item.color} onStartShouldSetResponder={() => {item.nav.goBack()}}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const ThemeSelected = (props) => {
  const renderItem = () => (
    <Item title={props.title} nav={props.navigation} color={props.color} />      
  );
  
  return(
    renderItem()
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemTheme: {
    padding: 30,
    borderRadius: 5,     
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ThemeSelected;